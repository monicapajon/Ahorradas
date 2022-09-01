const bReport = document.body;
const sectionReport = document.createElement("section");
sectionReport.className = "section mt-5 is-hidden vista";
sectionReport.id = "vista-reportes";

const divContRep = document.createElement("div");
divContRep.className = "container";
const divColumns = document.createElement("div");
divColumns.className = "columns";
const divColumn = document.createElement("div");
divColumn.className =
  "column is-8-widescreen is-10-desktop is-offset-2-widescreen is-offset-1-desktop";
const divBoxReport = document.createElement("div");
divBoxReport.classList.add("box");
const titleReport = document.createElement("h2");
titleReport.className = "title is-size-2 has-text-weight-bold pb-2";
titleReport.textContent = "Reportes";

const divSinReport = document.createElement("div");
divSinReport.id = "sin-reportes";
const divImgReport = document.createElement("div");
divImgReport.className = "my-6 py-6";
const figureReport = document.createElement("figure");
figureReport.className = "image";
const imgReport = document.createElement("img");
imgReport.src = "./assets/visualization.svg";

const titleOperInf = document.createElement("h4");
titleOperInf.className =
  "is-size-4 has-text-centered mt-6 mb-4 has-text-weight-semibold";
titleOperInf.textContent = " Operaciones Insuficientes";

const parrafReport = document.createElement("p");
parrafReport.className = "has-text-centered";
parrafReport.textContent = "Prueba agregando más operaciones";

// Resumen //

const divResumen = document.createElement("div");
divResumen.id = "con-reportes";
//divResumen.className = "is-hidden";//
const sectionResumen = document.createElement("section");
sectionResumen.className = "section mb-5";
sectionResumen.id = "resumen";

const titleResumen = document.createElement("h4");
titleResumen.className = "title is-size-4 mb-5 pb-4";
titleResumen.textContent = "Resumen";

// categoría con mayor ganancia
const divColums1CatMayGan = document.createElement("div");
divColums1CatMayGan.className = "columns is-mobile";

const divColmCatMayGan1 = document.createElement("div");
divColmCatMayGan1.className = "column is-6 has-text-weight-semibold";
divColmCatMayGan1.textContent = "Categoría con mayor ganancia";

const divColmCatMayGan2 = document.createElement("div");
divColmCatMayGan2.className = "column is-3 has-text-right";

const spanResum = document.createElement("span");
spanResum.className = "tag is-primary is-light";
spanResum.id = "categoria-mayor-ganancia";

const divColmCatMayGan3 = document.createElement("div");
divColmCatMayGan3.className =
  "column is-3 has-text-weight-semibold has-text-right has-text-success";
divColmCatMayGan3.id = "categoria-mayor-ganancia-monto";

// Categoría con mayor gasto

const divColums2CatMayGas = document.createElement("div");
divColums2CatMayGas.className = "columns is-mobile";

const divColmCatMayGas1 = document.createElement("div");
divColmCatMayGas1.className = "column is-6 has-text-weight-semibold";
divColmCatMayGas1.textContent = "Categoria con mayor gasto";

const divColmCatMayGas2 = document.createElement("div");
divColmCatMayGas2.className = "column is-3 has-text-right";

const spanResum2 = document.createElement("span");
spanResum2.className = "tag is-primary is-light";
spanResum2.id = "categoria-mayor-gasto";

const divColmCatMayGas3 = document.createElement("div");
divColmCatMayGas3.className =
  "column is-3 has-text-weight-semibold has-text-right has-text-danger";
divColmCatMayGas3.id = "categoria-mayor-gasto-monto";

//  categoría con mayor balance
const divColums3CatMayBal = document.createElement("div");
divColums3CatMayBal.className = "columns is-mobile";

const divColmCatMayBal1 = document.createElement("div");
divColmCatMayBal1.className = "column is-6 has-text-weight-semibold";
divColmCatMayBal1.textContent = " Categoria con mayor balance";

const divColmCatMayBal2 = document.createElement("div");
divColmCatMayBal2.className = "column is-3 has-text-right";

const spanResum3 = document.createElement("span");
spanResum3.className = "tag is-primary is-light";
spanResum3.id = "categoria-mayor-balance";

const divColmCatMayBal3 = document.createElement("div");
divColmCatMayBal3.className =
  "column is-3 has-text-weight-semibold has-text-right";
divColmCatMayBal3.id = "categoria-mayor-balance-monto";

const divColums4MesMayGan = document.createElement("div");
divColums4MesMayGan.className = "columns is-mobile";

const divColmMesMayGan1 = document.createElement("div");
divColmMesMayGan1.className = "column is-6 has-text-weight-semibold";
divColmMesMayGan1.textContent = "Mes con mayor ganancia";

const divColmMesMayGan2 = document.createElement("div");
divColmMesMayGan2.className = "column is-3 has-text-right";
divColmMesMayGan2.id = "mes-mayor-ganancia";

const divColmMesMayGan3 = document.createElement("div");
divColmMesMayGan3.className =
  "column is-3 has-text-weight-semibold has-text-right has-text-success";
divColmMesMayGan3.id = "mes-mayor-ganancia-monto";

const divColums5MesMayGas = document.createElement("div");
divColums5MesMayGas.className = "columns is-mobile";

const divColmMesMayGas1 = document.createElement("div");
divColmMesMayGas1.className = "column is-6 has-text-weight-semibold";
divColmMesMayGas1.textContent = "Mes con mayor gasto";

const divColmMesMayGas2 = document.createElement("div");
divColmMesMayGas2.className = "column is-3 has-text-right";
divColmMesMayGas2.id = "mes-mayor-gasto";

const divColmMesMayGas3 = document.createElement("div");
divColmMesMayGas3.className =
  "column is-3 has-text-weight-semibold has-text-right has-text-danger";
divColmMesMayGas3.id = "mes-mayor-gasto-monto";

const sectionResumen2 = document.createElement("section");
sectionResumen2.className = "section mb-5";

const titleTotCat = document.createElement("h4");
titleTotCat.className = "title is-size-4 mb-5 pb-4";
titleTotCat.textContent = "Totales por Categorías";

const divTotCat = document.createElement("div");
divTotCat.id = "reporte-categorias";

const sectionResumen3 = document.createElement("section");
sectionResumen3.className = "section";

const titleTotMes = document.createElement("h3");
titleTotMes.className = "title is-size-4 mb-5 pb-4";
titleTotMes.textContent = "Totales por Mes";

const divTotMes = document.createElement("div");
divTotMes.id = "reporte-mes";

bReport.appendChild(sectionReport);
sectionReport.appendChild(divContRep);
divContRep.appendChild(divColumns);
divColumns.appendChild(divColumn);
divColumn.appendChild(divBoxReport);
divBoxReport.appendChild(titleReport);
divBoxReport.appendChild(divSinReport);
divSinReport.appendChild(divImgReport);
divImgReport.appendChild(figureReport);
figureReport.appendChild(imgReport);
divSinReport.appendChild(titleOperInf);
divSinReport.appendChild(parrafReport);

// Resumen appendchild //

divBoxReport.appendChild(divResumen);
divResumen.appendChild(sectionResumen);
sectionResumen.appendChild(titleResumen);
sectionResumen.appendChild(divColums1CatMayGan);
divColums1CatMayGan.appendChild(divColmCatMayGan1);
divColums1CatMayGan.appendChild(divColmCatMayGan2);
divColmCatMayGan2.appendChild(spanResum);
divColums1CatMayGan.appendChild(divColmCatMayGan3);
sectionResumen.appendChild(divColums2CatMayGas);
divColums2CatMayGas.appendChild(divColmCatMayGas1);
divColums2CatMayGas.appendChild(divColmCatMayGas2);
divColmCatMayGas2.appendChild(spanResum2);
divColums2CatMayGas.appendChild(divColmCatMayGas3);
sectionResumen.appendChild(divColums3CatMayBal);
divColums3CatMayBal.appendChild(divColmCatMayBal1);
divColums3CatMayBal.appendChild(divColmCatMayBal2);
divColmCatMayBal2.appendChild(spanResum3);
divColums3CatMayBal.appendChild(divColmCatMayBal3);
sectionResumen.appendChild(divColums4MesMayGan);
divColums4MesMayGan.appendChild(divColmMesMayGan1);
divColums4MesMayGan.appendChild(divColmMesMayGan2);
divColums4MesMayGan.appendChild(divColmMesMayGan3);
sectionResumen.appendChild(divColums5MesMayGas);
divColums5MesMayGas.appendChild(divColmMesMayGas1);
divColums5MesMayGas.appendChild(divColmMesMayGas2);
divColums5MesMayGas.appendChild(divColmMesMayGas3);

divResumen.appendChild(sectionResumen2);
sectionResumen2.appendChild(titleTotCat);
sectionResumen2.appendChild(divTotCat);

divResumen.appendChild(sectionResumen3);
sectionResumen3.appendChild(titleTotMes);
sectionResumen3.appendChild(divTotMes);
