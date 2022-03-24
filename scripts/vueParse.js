const path = require('path')
const parse = require('vue-docgen-api').parse
const fs = require('fs-extra')

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
        const componentFilePath = `${watsonComponentsPath}/${componentName}/${componentName}.vue`

        if (fs.existsSync(componentFilePath)) {
          const componentInfo = await parse(componentFilePath)
          const componentInfoString = JSON.stringify(componentInfo)

          fs.writeFileSync(
            `${vueJsonOutputDir}/${componentName}.parsed.json`,
            componentInfoString
          )

          // eslint-disable-next-line no-console
          console.log(`Generating... ${componentName}`)
        } else {
          // eslint-disable-next-line no-console
          console.log(`Vue file does not exist... ${componentName}`)
        }
      })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err)
  }
})()
