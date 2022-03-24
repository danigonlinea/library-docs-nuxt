const path = require('path')
const parse = require('vue-docgen-api').parse
const fs = require('fs-extra')
const jsonminify = require('jsonminify')

const watsonComponentDir = 'watson-vue/src/components'
const vueJsonOutputDir = 'src/vueJson'

;(() => {
  try {
    const watsonComponentsPath = `${path.resolve(
      './node_modules/'
    )}/${watsonComponentDir}`

    fs.readdirSync(`${watsonComponentsPath}`, { withFileTypes: true })
      .filter(path => path.isDirectory())
      .forEach(async ({ name: componentName }) => {
        const componentFile = `${watsonComponentsPath}/${componentName}/${componentName}.vue`
        const componentInfo = await parse(componentFile)
        const componentInfoString = jsonminify(
          JSON.stringify(componentInfo, null, 4)
        )
        fs.writeFileSync(
          `${vueJsonOutputDir}/${componentName}.parsed.json`,
          componentInfoString
        )

        // eslint-disable-next-line no-console
        console.log(`Generating... ${componentName}`)
      })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err)
  }
})()
