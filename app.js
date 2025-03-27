'use strict'

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')
const state = require('./state')

// Pass --options via CLI arguments in command to enable these options.
const options = {}

module.exports = async function (fastify, opts) {
  setInterval(() => {
    console.info(state)
    state.count = state.count + 1
  }, 1000)
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

module.exports.options = options
