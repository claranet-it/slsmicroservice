import { FastifyPluginAsync } from 'fastify'

const routes: FastifyPluginAsync = async server => {
    server.get('/api/hello-world', async () => {
        return {
            hello: 'world'
        }
    })
}

export default routes