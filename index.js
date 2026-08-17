import express from 'express'
const app = express()
app.get('/', (req, res) => {
  res.send('Hello! Welcome to my Express server 2👋')
})

app.listen(8001, () => {
  console.log('App running on port 8001')
})
