const configuracoes = {
	bdMaquinas: {
		connectionLimit: 10,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'gestao-hospitalar',
	},
	porta: 10881,
	host: 'localhost',
	apiPath: '/',
	pastaPublica: 'public/',
	segredo: '', //INSERIR O SEGREDO AQUI
	originsWhiteList: [
		'http://localhost:4200'
		// incluir a rota de produção futuramente
	],
	corsOptions: {
		origins: ((origin, callback) => {
			var isWhitelisted = configuracoes.originsWhitelist.indexOf(origin) !== -1;
			callback(null, isWhitelisted);
		}),
		credentials: true
	}
};

module.exports = configuracoes;