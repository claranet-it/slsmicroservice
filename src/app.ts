import fastify from 'fastify'

const port = 5100
const server = fastify()

server.get('/api/hello-world', () => 'Hello World!!')

server.listen({ port }, () => {
    console.log(`http://localhost:${port}/`)
})