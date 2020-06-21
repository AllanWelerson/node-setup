import express, { request, response } from 'express'
import '@controllers/UsersController'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

app.listen(process.env.PORT || 3333)
