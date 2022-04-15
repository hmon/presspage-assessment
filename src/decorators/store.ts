import { createDecorator, Vue } from 'vue-class-component'
import { getModule } from 'vuex-module-decorators'

export function Store() {
  return (target: Vue, key: string) => {
    const metadata = Reflect.getMetadata('design:type', target, key)

    if (!metadata) {
      return
    }
    createDecorator((options, key) => {
      options.mixins = options.mixins || []

      options.mixins.push({
        beforeCreate() {
          this[key] = getModule(metadata, this.$store)
        }
      })
    })(target, key)
  }
}
