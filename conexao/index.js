const conexao = require('./conexao')

module.exports = {
    realizaConsulta: conexao.realizaConsulta,
    getSqlConnection: conexao.getSqlConnection,
    escape: conexao.escape
}