'use strict'
const conexao = require('../conexao')
const Promise = require('bluebird')

exports.class = class DaoBase {
	
	constructor(nomeTabela){
		this.nomeTabela = nomeTabela
	}

	insere(){
		throw new Error('Método não implementado!');
	}

	atualiza(){
		throw new Error('Método não implementado!');
	}

	getItem(idParam) {
		const id = parseInt(idParam)
		const consulta = `SELECT * FROM ${this.nomeTabela} WHERE id = ${id}`
		return conexao.realizaConsulta(consulta);
	}

	getItens(paginaAtual = 1, itensPorPagina = 10) {
		const offset = (paginaAtual-1)*itensPorPagina
		const consulta = `SELECT * FROM ${this.nomeTabela} LIMIT ${offset},${itensPorPagina}`
		return conexao.realizaConsulta(consulta);
	}

	getItensAtivos(paginaAtual = 1, itensPorPagina = 10) {
		const offset = (paginaAtual-1)*itensPorPagina
		const consulta = `SELECT * FROM ${this.nomeTabela} WHERE ativo = 1 LIMIT ${offset},${itensPorPagina}`
		return conexao.realizaConsulta(consulta);
	}

	getTodosItens(){
		const consulta = `SELECT * FROM ${this.nomeTabela} WHERE ativo = 1`
		return conexao.realizaConsulta(consulta);
	}

	countItens(){
		const consulta = `SELECT count(*) as quantidade FROM ${this.nomeTabela}`
		return conexao.realizaConsulta(consulta)
			.then((rows) => {
				if (rows.length > 0) {
					return rows[0].quantidade
				} else
					return 0;
			})	
	}

	countItensAtivos(){
		const consulta = `SELECT count(*) as quantidade FROM ${this.nomeTabela} WHERE ativo = 1`
		return conexao.realizaConsulta(consulta)
			.then((rows) => {
				if (rows.length > 0) {
					return rows[0].quantidade
				} else
					return 0;
			})	
	}

	deleta(idParam) {
		const id = parseInt(idParam)
		const consulta = `DELETE FROM ${this.nomeTabela} WHERE id = ${id}`
		return conexao.realizaConsulta(consulta);
	}

	persistir(objeto) {
		if (objeto.id !== 0) {
			//Caso o id seja diferente de 0, o objeto será alterado
			return this.atualiza(objeto)
				.then(() => {
					return objeto;
				});
		} else {
			//Caso o id seja indefinido o objeto será zerado
			return this.insere(objeto)
				.then((id) => {
					objeto.id = id
					return objeto;
				});
		}
	}
}