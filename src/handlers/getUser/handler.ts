import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'
import axios from 'axios'

const getUser = async (event: any) => {
  const { id } = event.pathParameters

  try {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return formatJSONResponse(data.data)
  } catch (e) {
    return formatJSONResponse({ e, event })
  }
}

const handler = middyfy(getUser)

export {
  handler,
  getUser
}