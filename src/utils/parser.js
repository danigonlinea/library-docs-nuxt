import { parse } from 'vue-docgen-api'

const vueComponentPath = '../../watson-vue/src/components/Button/Button.vue'

export const parseVue = async dir => {
  const componentInfo = await parse(vueComponentPath)
  return componentInfo
}
