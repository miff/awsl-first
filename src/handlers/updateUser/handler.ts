import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway'
import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'
import axios from 'axios'
import schema from '../createUser/schema'

const updateUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event: any) => {
  const { id } = event.pathParameters
  const { name, username, email } = event.body

  // do some validation here...
  // and if is it ok, continue

  const request = { name, username, email }

  try {
    const req = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, request)
    return formatJSONResponse(req.data)
  } catch (e) {
    return formatJSONResponse({ error: e })
  }
}

const handler = middyfy(updateUser)

export {
  handler,
  updateUser
}