import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'
import axios from 'axios'

const removeUser = async (event: any) => {
  const { id } = event.pathParameters

  try {
    // Probably need to check if wxist in DB and then remove...
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    return formatJSONResponse({ message: `User (${id}) is deleted` })
  } catch (e) {
    return formatJSONResponse({ e, event })
  }
}

const handler = middyfy(removeUser)

export {
  handler,
  removeUser
}