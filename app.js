const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Platforma za nagradne igre')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})