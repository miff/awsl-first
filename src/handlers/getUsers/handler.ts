import { formatJSONResponse } from '@libs/apiGateway'
import { middyfy } from '@libs/lambda'
import axios from 'axios'

const getUsers = async (event: any) => {
  try {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users')
    return formatJSONResponse(data.data)
  } catch (e) {
    return formatJSONResponse({ e, event })
  }
}

const handler = middyfy(getUsers)

export {
  handler,
  getUsers
}