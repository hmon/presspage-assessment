import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Users } from '@/models/users'
import { RemoteData } from '@/models/remoteData'
import { container } from 'tsyringe'
import { UserService } from '@/services/user.service'

@Module({
  name: 'user',
  namespaced: true
})
export class UserStore extends VuexModule {
  public remoteData = RemoteData.NotAsked

  public users: Users = []

  @Mutation
  public setRemoteData (state: RemoteData) {
    this.remoteData = state
  }

  public get getUsers() {
    return this.users
  }

  public get getUsersChunk() {
    return this.users.slice(0, 10)
  }

  public get isLoading () {
    return this.remoteData === RemoteData.Pending
  }

  @Mutation
  public setUsers(users: Users) {
    this.users = users
  }

  @Action
  async fetchUsers () {
    const userService = container.resolve(UserService)

    if (this.remoteData !== RemoteData.NotAsked) {
      return
    }

    this.setRemoteData(RemoteData.Pending)

    try {
      const users = await userService.getAll()

      this.setRemoteData(RemoteData.Success)
      this.setUsers(users)
    } catch (error: unknown) {
      this.setRemoteData(RemoteData.Failure)
      this.context.dispatch('common/showErrorMessage', error)
    }
  }

  @Action
  deleteUser (id: number) {
    this.setUsers(
      this.users.filter(user => user.id !== id)
    )
  }
}
