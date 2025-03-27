'use strict'
const state = require('../../state')
const process = require('node:process')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return `${process.env.TEXT}. Count ${state.count}`
  })
}
