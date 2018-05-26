"use strict";
const utilitarios = require('../utilitarios')

exports.class = class ControllerBase {
	constructor(dao){
		this.dao = dao
	}

	getItem(idParam){
		return this.dao.getItem(idParam);
	}

	getItens(p = 1, itens = 10){
		return utilitarios.consultaPaginada.getPaginado(this.dao, p, itens);
	}

	getItensAtivos(p = 1, itens = 10){
		return utilitarios.consultaPaginada.getAtivosPaginado(this.dao, p, itens);
	}

	getTodosItens(){
		return this.dao.getTodosItens();
	}

	novoItem(){
		throw Error("Ainda não implementado");
	}

	deletarItem(idParam) {
		return this.dao.deleta(idParam);
	}

	atualizaItem(idParam){
		throw Error("Ainda não implementado");
	}
}