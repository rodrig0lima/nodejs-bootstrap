const Promise = require('bluebird')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config')

const Roteador = require('./roteador')

const app = express()

app.use(bodyParser.json())
//Modo Debug
app.use(morgan('[:date[clf]] :method :url :status :response-time ms - :res[content-length]'))
//Cors config
app.use(cors(config.corsOptions))
app.use(Roteador.rota, Roteador.routes)

const server = app.listen(config.porta, () => {
	const host = server.address().address
	const port = server.address().port
	console.log('WebService executando! http://%s:%s', host, port)
})