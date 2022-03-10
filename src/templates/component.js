module.exports = function (
  renderedUsage, // props, events, methods and slots documentation rendered
  doc, // the object returned by vue-docgen-api
  config, // the local config, useful to know the context
  fileName, // the name of the current file in the doc (to explain how to import it)
  requiresMd, // a list of all the documentation files
  // attached to the component documented. It includes documentation of subcomponents
  { isSubComponent, hasSubComponents } // are we documenting // a sub-component or does the current component have subcomponents
) {
  const { displayName, description, docsBlocks, tags } = doc

  const dashName = displayName
    .replace(/([a-zA-Z])(?=[A-Z])/g, '$1-')
    .toLowerCase()
  const cTag = '<' + dashName + ' ></' + dashName + '>'

  // const badge = tags.badge ? tags.badge[0].description : ''
  // const badgeTitle = badge !== '' ? `(${tags.badge[0].description})` : ''

  const noExport = !!tags.noExport

  let usage = ''
  if (!noExport) {
    usage = `
  ## Usage
  #### Import single component...
  \`\`\` js
  import { ${displayName} } from 'watson-vue';

  //register it locally...
  components: {
    ${displayName},
  }

  //... or register it globally
  Vue.component('${dashName}', ${displayName});
  \`\`\`

  #### or import the whole library,
  \`\`\` js
  import * as WatsonVue from 'watson-vue';

  //register it globally
  Vue.use(WatsonVue);
  \`\`\`

  #### then use it in the vue template
  \`\`\` html
  ${cTag}
  \`\`\`
  `
  } else {
    usage = '<p >This component is NOT exported.</p>'
  }

  return `
  ---
  title: ${tags.niceName ? tags.niceName[0].description : displayName}
  menuTitle: ${tags.niceName ? tags.niceName[0].description : displayName} 
  description: ${description}
  category: ${
    tags.group ? 'Components | ' + tags.group[0].description : 'Components'
  }
  position: ${tags.position ? tags.position[0].description : 100}
  ---

  ${description}

  ${usage}

  ${renderedUsage.props}
  ${renderedUsage.methods}
  ${renderedUsage.events}
  ${renderedUsage.slots}

  ${docsBlocks ? docsBlocks.join('\n---\n') : ''}

  `
}