import schema from '../createUser/schema'
import { handlerPath } from '@libs/handlerResolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.handler`,
  events: [
    {
      http: {
        method: 'put',
        path: 'users/{id}',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}