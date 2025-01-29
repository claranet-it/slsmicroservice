import app from './app'
import awsLambdaFastify from '@fastify/aws-lambda'

export const lambda = awsLambdaFastify(app)