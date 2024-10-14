import { Configuration, TodosApi } from './generated'

const configuration = new Configuration({
  basePath: 'http://localhost:3000',
})

const api = new TodosApi(configuration)

export default api
