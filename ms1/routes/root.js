'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/produce', async (request, reply) => {
    return fastify.kafka.producer.send({
      topic: 'test-topic',
      messages: [{ key: 'key', value: JSON.stringify({name: 'Ravi', age : 23, friends : [ {name : 'a', age : 12}, {name : 'b', age : 14} ] }) }]
    });
  });
}
