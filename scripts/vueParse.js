const path = require('path')
const parse = require('vue-docgen-api').parse
const fs = require('fs-extra')

const name = 'Input'
const componentsRootFolder = path.resolve('./node_modules/')
const componentDir = `${componentsRootFolder}/watson-vue/src/components/${name}/${name}.vue`

;(async () => {
  const componentInfo = await parse(componentDir)
  const componentInfoString = JSON.stringify(componentInfo, null, 4)
  fs.writeFileSync(`src/vueJson/${name}.parsed.json`, componentInfoString)
})()
