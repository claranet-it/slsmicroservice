import fastify from 'fastify'
import awsLambdaFastify from '@fastify/aws-lambda'

const port = 5100
const server = fastify()

server.register(import('./routes'))

server.listen({ port }, () => {
    console.log(`http://localhost:${port}/`)
})

export const lambda = awsLambdaFastify(server)