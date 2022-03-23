import { parse } from 'vue-docgen-api'
const path = require('path')
/* const cors = require('cors')
const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

module.exports = app.use(async function (req, res) {
  try {
    const name = req.body.name

    const componentsRootFolder = path.resolve('./node_modules/')
    const { slots = [] } = await parse(
      `${componentsRootFolder}/watson-vue/src/components/${name}/${name}.vue`
    )

    res.status(200).json({ slots })
  } catch (error) {
    res.end(`Failed parsing component`)
  }
}) */

export default async function (req, res, next) {
  try {
    const name = 'Button'

    const componentsRootFolder = path.resolve('./node_modules/')
    const { slots = [] } = await parse(
      `${componentsRootFolder}/watson-vue/src/components/${name}/${name}.vue`
    )

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(slots))
  } catch (error) {
    res.end(`Failed parsing component`)
  }
}
