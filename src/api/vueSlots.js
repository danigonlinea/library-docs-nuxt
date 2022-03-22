import { parse } from 'vue-docgen-api'
const path = require('path')

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = app.use(async function (req, res) {
  try {
    const name = req.body.name

    const componentFolder1 = path.resolve('./node_modules/')

    const componentParsed = await parse(
      `${componentFolder1}/watson-vue/src/components/${name}/${name}.vue`
    )

    res.status(200).json({ data: componentParsed })
  } catch (error) {
    res.end(`Failed parsing component`)
  }
})
