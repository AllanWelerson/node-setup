import express from 'express'
import '@controllers/UsersController'

const app = express()

app.get('/', (request: express.Request, response: express.Response) => {
  return response.json({ message: 'Hello World - Test Heroku' })
})

app.listen(process.env.PORT || 3333)
