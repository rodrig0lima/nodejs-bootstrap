'use strict'

class ConsultaPaginada {
    constructor(itens, paginaAtual, totalPaginas, totalItens, itensPorPagina){
        this.itens = itens
        this.paginaAtual = paginaAtual
        this.totalPaginas = totalPaginas
        this.totalItens = totalItens
        this.itensPorPagina = itensPorPagina
    }
}

function paginar(count, get, p = 1, itens){
	let totalPaginas = 0
	let paginaAtual = p
	let itensPorPagina = itens
    let totalItens = 0
	return count()
		.then((total) => {
			totalItens = total
			totalPaginas = parseInt((totalItens / itensPorPagina) + ((totalItens % itensPorPagina > 0) ? 1 : 0))
            paginaAtual = Math.min(Math.max(1, paginaAtual), totalPaginas)
			return get(paginaAtual, itensPorPagina);
		})
		.then((itens) => {
			return new ConsultaPaginada(
				itens,
				paginaAtual,
				totalPaginas,
				totalItens,
				itensPorPagina
			);
		});
}

function getPaginado(dao, p = 1, itens) {
    let totalPaginas = 0
	let paginaAtual = p
	let itensPorPagina = itens
    let totalItens = 0
	return dao.countItens()
		.then((total) => {
			totalItens = total
			totalPaginas = parseInt((totalItens / itensPorPagina) + ((totalItens % itensPorPagina > 0) ? 1 : 0))
            paginaAtual = Math.min(Math.max(1, paginaAtual), totalPaginas)
			return dao.getItens(paginaAtual, itensPorPagina);
		})
		.then((itens) => {
			return new ConsultaPaginada(
				itens,
				paginaAtual,
				totalPaginas,
				totalItens,
				itensPorPagina
			);
		});
}

function getAtivosPaginado(dao, p = 1, itens) {
    let totalPaginas = 0
	let paginaAtual = p
	let itensPorPagina = itens
    let totalItens = 0
	return dao.countItensAtivos()
		.then((total) => {
			totalItens = total
			totalPaginas = parseInt((totalItens / itensPorPagina) + ((totalItens % itensPorPagina > 0) ? 1 : 0))
            paginaAtual = Math.min(Math.max(1, paginaAtual), totalPaginas)
			return dao.getItensAtivos(paginaAtual, itensPorPagina);
		})
		.then((itens) => {
			return new ConsultaPaginada(
				itens,
				paginaAtual,
				totalPaginas,
				totalItens,
				itensPorPagina
			);
		});
}

module.exports = {
	paginar,
    getPaginado,
    getAtivosPaginado
}
exports.class = ConsultaPaginada