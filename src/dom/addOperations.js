/*add operation**/
const addOp = document.body;
const sectionOperation = document.createElement("section");
sectionOperation.className = "section mt-5 is-hidden vista";
sectionOperation.id = "vista-operacion";

const containerOperation = document.createElement("div");
containerOperation.className = "container";

const operation1 = document.createElement("div");
operation1.className = "columns is-multiline";

const operation2 = document.createElement("div");
operation2.className =
  "column is-8-widescreen is-10-desktop is-offset-2-widescreen is-offset-1-desktop";

const boxOperation = document.createElement("div");
boxOperation.classList.add("box");
const titleOperation = document.createElement("h2");
titleOperation.className = "title is-size-2 has-text-weight-bold";
titleOperation.textContent = "Nueva Operación";

const fieldOperation = document.createElement("div");
fieldOperation.classList = "field mt-6";
const LabelAddOperation = document.createElement("Label");
LabelAddOperation.classList.add("label");
LabelAddOperation.textContent = "Descripción";

const controlOperation = document.createElement("div");
controlOperation.className = "control";

const divInputOperation = document.createElement("div");
divInputOperation.className = "is-fullwidth";

const inputOperation = document.createElement("input");
inputOperation.classList.add("input");
inputOperation.setAttribute("type", "text");
inputOperation.setAttribute("name", " ");
inputOperation.id = "descripcion-input";
//=============field Monto =============================
const fieldOperMonto = document.createElement("div");
fieldOperMonto.classList = "field";
const LabelAddOperMonto = document.createElement("Label");
LabelAddOperMonto.classList.add("label");
LabelAddOperMonto.htmlFor = "monto-input";
LabelAddOperMonto.textContent = "Monto";

const controlOper1 = document.createElement("div");
controlOper1.classList.add("control");
const controlOper2 = document.createElement("div");
controlOper2.classList.add("control");
const divInputMonto = document.createElement("div");
divInputMonto.className = "is-fullwidth";
const inputOperMonto = document.createElement("input");
inputOperMonto.classList.add("input");
inputOperMonto.setAttribute("type", "number");
inputOperMonto.setAttribute("name", " ");
inputOperMonto.id = "monto-input";
inputOperMonto.value = "0";

/*Operación - type*/
const fieldOperType = document.createElement("div");
fieldOperType.classList = "field";
const labelAddOperType = document.createElement("Label");
labelAddOperType.classList.add("label");
labelAddOperType.htmlFor = "tipo-select";
labelAddOperType.textContent = "Tipo";

const controlOperType = document.createElement("div");
controlOperType.className = "control";
const divOperType = document.createElement("div");
divOperType.className = "select is-fullwidth";
const selecType = document.createElement("select");
selecType.id = "tipo-operacion";
const optionGasto = document.createElement("option");
optionGasto.value = "GASTO";
optionGasto.textContent = "Gasto";
const optionGanancia = document.createElement("option");
optionGanancia.value = "GANANCIA";
optionGanancia.textContent = "Ganancia";

/*operation - category*/
const fieldOperCategory = document.createElement("div");
fieldOperCategory.classList = "field";
const LabelOperCategory = document.createElement("Label");
LabelOperCategory.classList.add("label");
LabelOperCategory.htmlFor = "categorias-select";
LabelOperCategory.textContent = "Categoría";
const divOperControl = document.createElement("div");
divOperControl.classList.add("control");
const divOperSelect = document.createElement("div");
divOperSelect.className = "select is-fullwidth";
const operSelect = document.createElement("select");
operSelect.className = "categorias-select";
operSelect.id = "categorias-select";

/*Services*/
const optionServicios = document.createElement("option");
optionServicios.textContent = "servicios";
const fieldOperDate = document.createElement("div");
fieldOperDate.classList.add("field");
const labelDate = document.createElement("label");
labelDate.classList.add("label");
labelDate.htmlFor = "fecha-input";
labelDate.textContent = "Fecha";

const divControlDate = document.createElement("div");
divControlDate.classList.add("control");
const divInputDate = document.createElement("div");
divInputDate.classname = "is-fullwidth";
const inputDate = document.createElement("input");
inputDate.setAttribute("class", "input");
inputDate.setAttribute("type", "date");
inputDate.setAttribute("name", " ");
inputDate.id = "fecha-input";

const divButtons = document.createElement("div");
divButtons.className = "buttons mt-6";

const cancelButton = document.createElement("button");
cancelButton.className = "button is-light";
cancelButton.id = "cancelar-agregar-operacion-boton";
cancelButton.textContent = "Cancelar";

const addButton = document.createElement("button");
addButton.className = "button is-success";
addButton.id = "agregar-operacion-boton";
addButton.textContent = "Agregar";

/*appenchild Operations*/
addOp.appendChild(sectionOperation);
sectionOperation.appendChild(containerOperation);
containerOperation.appendChild(operation1);
operation1.appendChild(operation2);
operation2.appendChild(boxOperation);
boxOperation.appendChild(titleOperation);
boxOperation.appendChild(fieldOperation);
controlOperation.appendChild(divInputOperation);
divInputOperation.appendChild(inputOperation);
fieldOperation.appendChild(LabelAddOperation);
fieldOperation.appendChild(controlOperation);

boxOperation.appendChild(fieldOperMonto);
fieldOperMonto.appendChild(LabelAddOperMonto);
fieldOperMonto.appendChild(controlOper1);
controlOper1.appendChild(controlOper2);
controlOper2.appendChild(divInputMonto);
divInputMonto.appendChild(inputOperMonto);

/*--------*/
/*Operation - Type*/
boxOperation.appendChild(fieldOperType);
fieldOperType.appendChild(labelAddOperType);
fieldOperType.appendChild(controlOperType);
controlOperType.appendChild(divOperType);
divOperType.appendChild(selecType);
selecType.appendChild(optionGasto);
selecType.appendChild(optionGanancia);

/*Operation - Category*/
boxOperation.appendChild(fieldOperCategory);
fieldOperCategory.appendChild(LabelOperCategory);
fieldOperCategory.appendChild(divOperControl);
divOperControl.appendChild(divOperSelect);
divOperSelect.appendChild(operSelect);
operSelect.appendChild(optionServicios);

/*Operation - Services*/
boxOperation.appendChild(fieldOperDate);
fieldOperDate.appendChild(labelDate);
fieldOperDate.appendChild(divControlDate);
divControlDate.appendChild(divInputDate);
divInputDate.appendChild(inputDate);

boxOperation.appendChild(fieldOperDate);
fieldOperDate.appendChild(labelDate);
fieldOperDate.appendChild(divControlDate);
divControlDate.appendChild(divInputDate);

/*Button*/
boxOperation.appendChild(divButtons);
divButtons.appendChild(cancelButton);
divButtons.appendChild(addButton);
