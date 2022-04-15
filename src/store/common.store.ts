import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({
  name: 'common',
  namespaced: true
})
export class CommonStore extends VuexModule {
  public error = ''
  public showError = false

  @Mutation
  setError (error: string) {
    this.error = error
  }

  @Mutation
  setShowError (show: boolean) {
    this.showError = show
  }

  @Action
  showErrorMessage (error: string) {
    this.setError(error)
    this.setShowError(true)
  }

  @Action
  hideErrorMessage () {
    this.setShowError(false)
  }
}