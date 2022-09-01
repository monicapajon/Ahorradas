const addBal = document.body;
const sectionBalance = document.createElement("section");
sectionBalance.className = "section mt-5 vista";
sectionBalance.id = "vista-balance";
const containerBal = document.createElement("div");
containerBal.className = "container";
const DivMainColumns = document.createElement("div");
DivMainColumns.className = "columns is-multiline";
const divMainBal = document.createElement("div");
divMainBal.className = "column is-3-widescreen is-4-desktop is-12-tablet is-offset-1-widescreen";
const divBoxBal = document.createElement("div");
divBoxBal.className = "box";
divBoxBal.classList.add("box");
const titleBal = document.createElement("h2");
titleBal.className = "is-title is-size-3 mb-6 has-text-weight-bold";
titleBal.textContent = "Balance";

const divGanancia = document.createElement("div");
divGanancia.className = "columns is-mobile is-vcentered";
const divTitleGanancia = document.createElement("div");
divTitleGanancia.className = "column is-size-5";
divGanancia.textContent = "Ganancias";
const visualGanancia = document.createElement("div");
visualGanancia.className = "column has-text-right has-text-success";
visualGanancia.id = "ganancias";
visualGanancia.innerHTML = "+$0";

const divGastos = document.createElement("div");
divGastos.className = "columns is-mobile is-vcentered";
const divTitleGastos = document.createElement("div");
divTitleGastos.className = "column is-size-5";
divGastos.textContent = "Gastos";
const visualGastos = document.createElement("div");
visualGastos.className = "column has-text-right has-text-danger";
visualGastos.id = "gastos";
visualGastos.innerHTML = "+$0";

const divTotal = document.createElement("div");
divTotal.className = "columns is-mobile is-vcentered";
const divTitleTotal = document.createElement("div");
divTitleTotal.className = "column is-size-4";
divTotal.textContent = "Total";
const visualTotal = document.createElement("div");
visualTotal.className = "column has-text-right has-text-weight-bold";
visualTotal.id = "balance";
visualTotal.innerHTML = "$0";

const divBoxFil = document.createElement("div");
divBoxFil.classList.add("box");

const divColumnFil = document.createElement("div");
divColumnFil.className = "columns is-mobile is-vcentered";
const divTitleFiltro = document.createElement("div");
divTitleFiltro.className = "column";
const titleFiltro = document.createElement("h3");
titleFiltro.className = "is-size-4 has-text-weight-bold";
titleFiltro.textContent = "Filtros";

const divAnchorFil = document.createElement("div");
divAnchorFil.className = "column has-text-right";
const anchorFiltro = document.createElement("a");
anchorFiltro.href = "#";
anchorFiltro.id = "toggle-filtros";
anchorFiltro.textContent = "Ocultar filtros";

const divMainFiltros = document.createElement("div");
divMainFiltros.id = "filtro-all";

const divTipo = document.createElement("div");
divTipo.className = "field";
const labelTipo = document.createElement("label");
labelTipo.className = "label";
labelTipo.htmlFor = "filtro-tipo";
labelTipo.textContent = "Tipo";
const divControlTipo = document.createElement("div");
divControlTipo.className = "control";
const divSelectTipo = document.createElement("div");
divSelectTipo.className = "select is-fullwidth";
const selectTipo = document.createElement("select");
selectTipo.id = "filtro-tipo";
const optionTodos = document.createElement("option");
optionTodos.value = "TODOS";
optionTodos.textContent = "Todos";
const optionGast = document.createElement("option");
optionGast.value = "GASTO";
optionGast.textContent = "Gasto";

const optionGanBal = document.createElement("option");
optionGanBal.value = "GANANCIA";
optionGanBal.textContent = "Ganancia";

const divMainCategoria = document.createElement("div");
divMainCategoria.className = "field";

const labelCategoria = document.createElement("label");
labelCategoria.className = "label";
labelCategoria.htmlFor = "filtro-categoria";
labelCategoria.textContent = "Categoría";

const divControlCat = document.createElement("div");
divControlCat.className = "control";

const divSelectCat = document.createElement("div");
divSelectCat.className = "select is-fullwidth";

const selectCat = document.createElement("select");
selectCat.className = "filtro-categoria categorias-select";
selectCat.id = "filtro-categoria";

const optionCat = document.createElement("option");
optionCat.textContent = "Servicios";

const divMainDate = document.createElement("div");
divMainDate.className = "field";
const labelBalDate = document.createElement("label");
labelBalDate.className = "label";
labelBalDate.htmlFor = "filtro-fecha";
labelBalDate.textContent = "Desde";
const divBalDate = document.createElement("div");
divBalDate.className = "control";
const divInBalDate = document.createElement("div");
divInBalDate.className = "is-fullwidth";
const inBalDate = document.createElement("input");
inBalDate.className = " input";
inBalDate.type = "date";
inBalDate.id = "filtro-fecha";

const divMainOrden = document.createElement("div");
divMainOrden.className = "field";
const labelOrden = document.createElement("label");
labelOrden.className = "label";
labelOrden.htmlFor = "filtro-orden";
labelOrden.textContent = "Ordenar por";

const divControlOrden = document.createElement("label");
divControlOrden.className = "control";
const divSelectOrden = document.createElement("div");
divSelectOrden.className = "select is-fullwidth";
const selectOrden = document.createElement("select");
selectOrden.id = "filtro-orden";
const optionMasRe = document.createElement("option");
optionMasRe.value = "MAS_RECIENTES";
optionMasRe.textContent = "Más reciente";
const optionMenosRe = document.createElement("option");
optionMenosRe.value = "MENOS_RECIENTES";
optionMenosRe.textContent = "Menos reciente";
const optionMayorMonto = document.createElement("option");
optionMayorMonto.value = "MAYOR_MONTO";
optionMayorMonto.textContent = "Mayor monto";
const optionMenorMonto = document.createElement("option");
optionMenorMonto.value = "MENOR_MONTO";
optionMenorMonto.textContent = "Menor monto";
const optionAZ = document.createElement("option");
optionAZ.value = "A/Z";
optionAZ.textContent = "A/Z";
const optionZA = document.createElement("option");
optionZA.value = "Z/A";
optionZA.textContent = "Z/A";

const divMainOperaciones = document.createElement("div");
divMainOperaciones.className = "column is-7-widescreen is-8-desktop";
const divOpContainer = document.createElement("div");
divOpContainer.className = "box operaciones-contenedor";
const divVerOperacion = document.createElement("div");
divVerOperacion.className = "columns mb-4";
const divTitleOp = document.createElement("div");
divTitleOp.classname = "column";
const titleOperacion = document.createElement("h3");
titleOperacion.className = "is-size-4 has-text-weight-bold";
titleOperacion.textContent = "Operaciones";

const divButtonOp = document.createElement("div");
divButtonOp.className = "column has-text-right-tablet";
const buttonOperacion = document.createElement("button");
buttonOperacion.type = "button";
buttonOperacion.className = "button is-primary";
buttonOperacion.id = "ver-operacion";
buttonOperacion.textContent = "+ Nueva operación";

const divConOp = document.createElement("div");
divConOp.id = "con-operaciones";
divConOp.className = "is-hidden";
const divFlexOp = document.createElement("div");
divFlexOp.className = "columns has-text-weight-semibold is-hidden-mobile";
const divOpDescripcion = document.createElement("div");
divOpDescripcion.className = "column is-3";
divOpDescripcion.textContent = "Descripción";
const divOpCategoria = document.createElement("div");
divOpCategoria.className = "column is-3";
divOpCategoria.textContent = "Categoría";
const divOpDate = document.createElement("div");
divOpDate.className = "column is-2 has-text-right";
divOpDate.textContent = "Fecha";
const divOpMonto = document.createElement("div");
divOpMonto.className = "column is-2 has-text-right";
divOpMonto.textContent = "Monto";
const divOpAcciones = document.createElement("div");
divOpAcciones.className = "column is-2 has-text-right";
divOpAcciones.textContent = "Acciones";
const divAllOp = document.createElement("div");
divAllOp.id = "operaciones";

const divImgSinOp = document.createElement("div");
divImgSinOp.className = "my-6 py-6";
divImgSinOp.id = "sin-operaciones";

const figureSinOp = document.createElement("figure");
figureSinOp.classList.add("image");
const imgSinOp = document.createElement("img");
imgSinOp.src = "./assets/shopping.svg";
imgSinOp.setAttribute("class", "");
imgSinOp.setAttribute("alt", "");
const titleSinRes = document.createElement("h4");
titleSinRes.textContent = "Sin resultados";
titleSinRes.className = "is-size-4 has-text-centered mt-6 mb-4 has-text-weight-semibold";
const parrafOp = document.createElement("p");
parrafOp.className = "has-text-centered";
parrafOp.textContent = "Cambia los filtros o agrega operaciones";

//appendchilds//

addBal.appendChild(sectionBalance);
sectionBalance.appendChild(containerBal);
containerBal.appendChild(DivMainColumns);
DivMainColumns.appendChild(divMainBal);
divMainBal.appendChild(divBoxBal);
divBoxBal.appendChild(titleBal);
divBoxBal.appendChild(divGanancia);
divGanancia.appendChild(divTitleGanancia);
divGanancia.appendChild(visualGanancia);
divBoxBal.appendChild(divGastos);
divGastos.appendChild(divTitleGastos);
divGastos.appendChild(visualGastos);
divBoxBal.appendChild(divTotal);
divTotal.appendChild(divTitleTotal);
divTotal.appendChild(visualTotal);

divBoxFil.appendChild(divColumnFil);
divColumnFil.appendChild(divTitleFiltro);
divTitleFiltro.appendChild(titleFiltro);
divColumnFil.appendChild(divAnchorFil);
divAnchorFil.appendChild(anchorFiltro);

divMainBal.appendChild(divBoxFil);
divBoxFil.appendChild(divMainFiltros);
divMainFiltros.appendChild(divTipo);
divMainFiltros.appendChild(divMainCategoria);
divMainFiltros.appendChild(divMainDate);
divMainFiltros.appendChild(divMainOrden);
divTipo.appendChild(labelTipo);
divTipo.appendChild(divControlTipo);
divControlTipo.appendChild(divSelectTipo);
divSelectTipo.appendChild(selectTipo);
selectTipo.appendChild(optionTodos);
selectTipo.appendChild(optionGast);
selectTipo.appendChild(optionGanBal);

divMainCategoria.appendChild(labelCategoria);
divMainCategoria.appendChild(divControlCat);
divControlCat.appendChild(divSelectCat);
divSelectCat.appendChild(selectCat);
selectCat.appendChild(optionCat);

divMainDate.appendChild(labelBalDate);
divMainDate.appendChild(divBalDate);
divBalDate.appendChild(divInBalDate);
divInBalDate.appendChild(inBalDate);

divMainOrden.appendChild(labelOrden);
divMainOrden.appendChild(divControlOrden);
divControlOrden.appendChild(divSelectOrden);
divSelectOrden.appendChild(selectOrden);
selectOrden.appendChild(optionMasRe);
selectOrden.appendChild(optionMenosRe);
selectOrden.appendChild(optionMayorMonto);
selectOrden.appendChild(optionMenorMonto);
selectOrden.appendChild(optionAZ);
selectOrden.appendChild(optionZA);

DivMainColumns.appendChild(divMainOperaciones);
divMainOperaciones.appendChild(divOpContainer);
divOpContainer.appendChild(divVerOperacion);
divVerOperacion.appendChild(divTitleOp);
divTitleOp.appendChild(titleOperacion);
divVerOperacion.appendChild(divButtonOp);
divButtonOp.appendChild(buttonOperacion);

divOpContainer.appendChild(divConOp);
divConOp.appendChild(divFlexOp);
divFlexOp.appendChild(divOpDescripcion);
divFlexOp.appendChild(divOpCategoria);
divFlexOp.appendChild(divOpDate);
divFlexOp.appendChild(divOpMonto);
divFlexOp.appendChild(divOpAcciones);
divConOp.appendChild(divAllOp);

divOpContainer.appendChild(divImgSinOp);
divImgSinOp.appendChild(figureSinOp);
figureSinOp.appendChild(imgSinOp);
