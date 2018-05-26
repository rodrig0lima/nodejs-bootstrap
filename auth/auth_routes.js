'use strict'
const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('../config')
//const controller = require('../controller/controller')
const router = express.Router()
const rota = '/auth'

router.post('/login', (req,res) => {
	/*controller.login(req.body.login, req.body.senha)
		.then((usuario) => {
			if(usuario != null){
				const payload = {
					"tipo_login": 'comum', //DEFINIR OS TIPOS DE ACESSO
					"id": usuario.id
				};
				const token = jwt.sign(payload, config.segredo, {
					expiresIn: "1 days" // expires in 24 hours
				})
				res.json({
					"sucesso": true,
					"cod_erro": 100,
					"msg": "",
					"id": usuario.id,
					"token": token
				})
			} else {
				res.statusCode = 401
				res.json({
					"sucesso": false,
					"cod_erro": 70,
					"msg": "Login ou Senha Incorretos!",
					"id": null,
					"token": null
				})
			}
		})*/
})


module.exports = {
	router: router,
	rota: rota
}