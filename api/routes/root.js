'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })

  fastify.get('/produce', async (request, reply) => {
    return fastify.kafka.producer.send({
      topic: request.query.topic,
      messages: [{ 
        key: 'key', 
        value: 
        JSON.stringify({
          name: 'Ravi', 
          age : 28, 
          friends : [ 
            {name : 'Roshan', age : 28}, 
            {name : 'Chintu', age : 28} 
          ] 
        }) 
      }]
    });
  });
}
