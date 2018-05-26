const configuracoes = require('../config')
const mysql = require('mysql')
const Promise = require('bluebird')
Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const pool = mysql.createPool(configuracoes.bdMaquinas)
const escape = mysql.escape

//Utiliza a função com disposer, que irá ser executado sempre ao fim da promise, garantindo a liberação da conexão
function realizaConsulta(consulta) {
	return Promise.using(getSqlConnection(pool), (conn) => {
		return conn.queryAsync(consulta);
	});
}

//Utiliza a função com disposer, que irá ser executado sempre ao fim da promise, garantindo a liberação da conexão
function getSqlConnection() {
	return pool.getConnectionAsync().disposer(function (connection) {
		try {
			connection.release();
		} catch (e) { }
	});
}

module.exports = {
	realizaConsulta,
	getSqlConnection,
	escape
}