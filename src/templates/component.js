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

 of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.


 ## Usage


 ## 


  ${renderedUsage.props}
  ${renderedUsage.methods}
  ${renderedUsage.events}
  ${renderedUsage.slots}

  ${docsBlocks ? docsBlocks.join('\n---\n') : ''}

  `
}
