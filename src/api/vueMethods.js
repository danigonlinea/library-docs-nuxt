import { parse } from 'vue-docgen-api'
const path = require('path')

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = app.use(async function (req, res) {
  res.writeHead(200, '', {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS',
  })

  try {
    const name = req.body.name

    const componentsRootFolder = path.resolve('./node_modules/')
    const { methods = [] } = await parse(
      `${componentsRootFolder}/watson-vue/src/components/${name}/${name}.vue`
    )

    res.status(200).json({ methods })
  } catch (error) {
    res.end(`Failed parsing component`)
  }
})
