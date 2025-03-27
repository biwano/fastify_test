'use strict'
const state = require('../../state')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return `count ${state.count}`
  })
}
