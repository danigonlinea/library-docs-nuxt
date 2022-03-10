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

  console.log(`Generating... ${displayName}`)

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

  ${renderedUsage.props}
  ${renderedUsage.methods}
  ${renderedUsage.events}
  ${renderedUsage.slots}

  ${docsBlocks ? docsBlocks.join('\n---\n') : ''}

  `
}
