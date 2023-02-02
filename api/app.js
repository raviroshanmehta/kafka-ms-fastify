'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const fastifyKafkaJS = require('fastify-kafkajs')
const fastifyGracefulShutdown = require('fastify-graceful-shutdown')

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {}

module.exports = async function (fastify, opts) {
	// Place here your custom code!
	await fastify.register(fastifyGracefulShutdown);

	await fastify.register(fastifyKafkaJS, {
		clientConfig: {
			brokers: ['localhost:9092'],
			clientId: 'api'
		},
		consumers: [
			{
				consumerConfig: {
					groupId: 'api'
				},
				subscription: {
					topics: ['common','api'],
					fromBeginning: false
				},
				runConfig: {
					eachMessage: async ({ message }) => {
						console.log(`Consumed message from api :  ${message.value}`);
					}
				}
			}
		]
	});
	

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
