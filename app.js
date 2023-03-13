const express = require('express')
const app = express()
const dotenv = require('dotenv')

const port = process.env.PORT || 5000

dotenv.config()

app.get('/', (req, res) => {
  res.send('Apstinencijska Kviza REST API Server running')
})

// SETUP SERVER
app.listen(port, () => {
  console.log("Server is running on port ", port)
})