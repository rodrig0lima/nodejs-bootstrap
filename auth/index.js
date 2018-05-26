const Rotas = require('./auth_routes')
const controller = require('./auth_controller')

module.exports = {
	routes: Rotas.router,
	rota: Rotas.rota,
	authenticate: controller.authenticate
}