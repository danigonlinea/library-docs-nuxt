import { parse } from 'vue-docgen-api'
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

module.exports = app.use(async function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')

  try {
    const { name = '' } = req.body

    const componentsRootFolder = path.resolve('./node_modules/')
    const { methods = [] } = await parse(
      `${componentsRootFolder}/watson-vue/src/components/${name}/${name}.vue`
    )

    res.status(200).json({ methods })
  } catch (error) {
    res.end(`Failed parsing component ${error} -`)
  }
})
