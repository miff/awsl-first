import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'
import axios from 'axios'
import schema from './schema'

const createUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event: any) => {
  const { name, username, email } = event.body

  // do some validation here...
  // and if is it ok, continue

  const request = { name, username, email }

  try {
    const req = await axios.post('https://jsonplaceholder.typicode.com/users', request)
    return formatJSONResponse(req.data)
  } catch (e) {
    return formatJSONResponse({ error: e })
  }
}

const handler = middyfy(createUser)

export {
  handler,
  createUser
}