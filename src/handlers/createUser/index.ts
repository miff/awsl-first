import schema from './schema'
import { handlerPath } from '@libs/handlerResolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.handler`,
  events: [
    {
      http: {
        method: 'post',
        path: 'users',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}