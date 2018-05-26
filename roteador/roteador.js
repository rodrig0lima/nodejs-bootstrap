const express = require('express')
const router = express.Router()

const Auth = require('../auth')
const config = require('../config')

const rota = config.apiPath

router.use(Auth.rota, Auth.routes)
//ROTAS PÚBLICAS
router.use(Auth.authenticate)
//ROTAS PRIVADAS


module.exports = {
	rota,
	router
}