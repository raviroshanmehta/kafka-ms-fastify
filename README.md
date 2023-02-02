# kafka-ms-fastify
Fastify Microservice Setup with Apache Kafka 

This git is part for an blog [NodeJS Microservice with Fastify and Kafka](https://medium.com/@raviroshanmehta/nodejs-microservice-with-fastify-and-kafka-14e104c49184)

## How to run

Assuming [Apache Kafka](https://kafka.apache.org/) is running on your local.

Step 1: Run API Gateway

```
cd api
npm i
cp .env.example .env
npm run dev
```

Step 2: Run Microservice 1

```
cd ms1
npm i
cp .env.example .env
npm run dev
```

Step 2: Run Microservice 2

```
cd ms2
npm i
cp .env.example .env
npm run dev
```

## Usage

Now open below urls and check console for logs.

http://127.0.0.1:5000/produce?topic=common 
(message consumed in api,ms1,ms2)

http://127.0.0.1:5000/produce?topic=api 
(message consumed in api)

http://127.0.0.1:5000/produce?topic=ms1 
(message consumed in ms1)

http://127.0.0.1:5000/produce?topic=ms2 
(message consumed in ms2)
