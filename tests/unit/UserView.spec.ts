import { container } from 'tsyringe'
import { UserService } from '@/services/user.service'
import UsersView from '@/views/UsersView.vue'
import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import UserCard from '@/components/UserCard.vue'
import { UserStore } from '@/store/user.store'
import store from '@/store'
import { getModule } from 'vuex-module-decorators'

describe('UserView', () => {
  let userService: UserService

  beforeEach(() => {
    container.clearInstances()
    userService = container.resolve(UserService)
  })

  it('should call getAll when UsersView mounts', () => {
    const userServiceMock = jest.spyOn(userService, 'getAll').mockResolvedValue([])

    const wrapper = shallowMount(UsersView, {
      global: {
        plugins: [store]
      }
    })

    expect(userServiceMock).toHaveBeenCalled()
  })

  it('should show loading spinner', function() {
    const wrapper = shallowMount(UsersView, {
      global: {
        plugins: [store]
      }
    })

    expect(wrapper.html()).toBe('<loading-spinner-stub></loading-spinner-stub>')
  })

  it('should render 10 users', function() {
    const mockUsers = [...Array(20)].map((_, i) => ({
      id: i,
      login: `User ${i}`
    }))

    const mockStore = createStore({
      modules: {
        user: {
          ...UserStore,
          state: {
            ...UserStore,
            users: mockUsers
          }
        }
      }
    })


    const wrapper = shallowMount(UsersView, {
      global: {
        plugins: [mockStore]
      }
    })

    expect(wrapper.vm.users.length).toBe(10)

    expect(wrapper.findAllComponents(UserCard).length).toBe(10)
  })

  it('should render 10 users after deleting one', function() {
    const mockUsers = [...Array(20)].map((_, i) => ({
      id: i,
      login: `User ${i}`
    }))

    const mockStore = createStore({
      modules: {
        user: {
          ...UserStore,
          state: {
            ...UserStore,
            users: mockUsers
          }
        }
      }
    })

    const userStore = getModule(UserStore, mockStore)

    const wrapper = shallowMount(UsersView, {
      global: {
        plugins: [mockStore]
      }
    })

    userStore.deleteUser(mockUsers[0].id)

    expect(userStore.getUsers.length).toBe(19)

    expect(userStore.getUsers).not.toContain(mockUsers[0])

    expect(wrapper.vm.users.length).toBe(10)

    expect(wrapper.findAllComponents(UserCard).length).toBe(10)
  })

  it('should render 9 users for 9 users in store', function() {
    const mockUsers = [...Array(9)].map((_, i) => ({
      id: i,
      login: `User ${i}`
    }))

    const mockStore = createStore({
      modules: {
        user: {
          ...UserStore,
          state: {
            ...UserStore,
            users: mockUsers
          }
        }
      }
    })

    const userStore = getModule(UserStore, mockStore)

    const wrapper = shallowMount(UsersView, {
      global: {
        plugins: [mockStore]
      }
    })

    expect(userStore.getUsers.length).toBe(9)

    expect(wrapper.vm.users.length).toBe(9)

    expect(wrapper.findAllComponents(UserCard).length).toBe(9)
  })
})
