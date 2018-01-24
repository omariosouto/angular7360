const express = require('express')
const app = express()

app.get('/', function(req, res) {
  // Consulta o Banco e trás

  {
    produtos: []
  }
  res.json({ nome: 'Mario' })
})

app.listen(4001)

