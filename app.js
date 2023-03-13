const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Apstinencijska Kviza REST API Server running')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})