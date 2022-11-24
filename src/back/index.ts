import express from 'express'
import { routes } from '../routes'
import cors from 'cors'

const app = express()
app.get('/', (req, res) => res.send('ola'))
app.use(cors())
app.use('/api', routes())

app.listen(3000, () => {
  console.log('LISTENING !!!!')
})
