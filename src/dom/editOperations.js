const bEditOp = document.body;
const sectionEditOper = document.createElement("section");
sectionEditOper.className = "section mt-5 is-hidden vista ";
sectionEditOper.id = "vista-editar-operacion";

const divContEdOp = document.createElement("div");
divContEdOp.className = "container";

const divColmsEdOp = document.createElement("div");
divColmsEdOp.className = "columns is-multiline";

const divColEdOp = document.createElement("div");
divColEdOp.className =
  "column is-8-widescreen is-10-desktop is-offset-2-widescreen is-offset-1-desktop";

const divBoxEdOp = document.createElement("div");
divBoxEdOp.className = "box";

const titleEdOp = document.createElement("h2");
titleEdOp.className = "title is-size-2 has-text-weight-bold";
titleEdOp.textContent = "Editar operación";

const fielDescEdOp = document.createElement("div");
fielDescEdOp.className = "field mt-6";

const descLabelEdOp = document.createElement("label");
descLabelEdOp.className = "label";
descLabelEdOp.htmlFor = "editar-descripcion-input";
descLabelEdOp.textContent = "Descripción";

const descControlEdOp = document.createElement("div");
descControlEdOp.className = "control";

const divDescInputEdOp = document.createElement("div");
divDescInputEdOp.className = "is-fullwidth";
const descInputEdOp = document.createElement("input");
descInputEdOp.className = "input";
descInputEdOp.setAttribute("type", "text");
descInputEdOp.setAttribute("name", "");
descInputEdOp.id = "editar-descripcion-input";

// field Monto
const fielMontoEdOp = document.createElement("div");
fielMontoEdOp.className = "field";

const montoLabelEdOp = document.createElement("label");
montoLabelEdOp.className = "label";
montoLabelEdOp.htmlFor = "editar-monto-input";
montoLabelEdOp.textContent = "Monto";

const montoControl1 = document.createElement("div");
montoControl1.className = "control";
const montoControl2 = document.createElement("div");
montoControl2.className = "control";

const montoDivEdOp = document.createElement("div");
montoDivEdOp.className = "is-fullwidth";
const montoInputEdOp = document.createElement("input");
montoInputEdOp.className = "input";
montoInputEdOp.setAttribute("type", "number");
montoInputEdOp.setAttribute("name", " ");
montoInputEdOp.id = "editar-monto-input";

// field Tipo
const fielTipoEdOp = document.createElement("div");
fielTipoEdOp.className = "field";

const tipoLabelEdOp = document.createElement("label");
tipoLabelEdOp.className = "label";
tipoLabelEdOp.htmlFor = "editar-tipo-operacion";
tipoLabelEdOp.textContent = "Tipo";

const tipoControlEdOp = document.createElement("div");
tipoControlEdOp.className = "control";

const tipoDivEdOp = document.createElement("div");
tipoDivEdOp.className = "select is-fullwidth";
const tipoSelectEdOp = document.createElement("select");
tipoSelectEdOp.id = "editar-tipo-operacion";

const optionGastOp = document.createElement("option");
optionGastOp.value = "GASTO";
optionGastOp.textContent = "Gasto";

const optionGanOp = document.createElement("option");
optionGanOp.value = "GANANCIA";
optionGanOp.textContent = "Ganancia";

// fiel Categoria
const fielCatEdOp = document.createElement("div");
fielCatEdOp.className = "field";

const catLabelEdOp = document.createElement("label");
catLabelEdOp.className = "label";
catLabelEdOp.htmlFor = "editar-categorias-select";
catLabelEdOp.textContent = "Categoría";

const catControlEdOp = document.createElement("div");
catControlEdOp.className = "control";

const catDivEdOp = document.createElement("div");
catDivEdOp.className = "select is-fullwidth";
const catSelectEdOp = document.createElement("select");
catSelectEdOp.className = "categorias-select";
catSelectEdOp.id = "editar-categorias-select";
const optionServicio = document.createElement("option");
optionServicio.textContent = "Servicio";

// Field Fecha

const fielFechaEdOp = document.createElement("div");
fielFechaEdOp.className = "field";

const fecLabelEdOp = document.createElement("label");
fecLabelEdOp.className = "label";
fecLabelEdOp.htmlFor = "editar-fecha-input";
fecLabelEdOp.textContent = "Fecha";

const fechaControl1 = document.createElement("div");
fechaControl1.className = "control";

const fechaControl2 = document.createElement("div");
fechaControl2.className = "is-fullwidth";

const fechaInputEdOp = document.createElement("input");
fechaInputEdOp.className = "input";
fechaInputEdOp.setAttribute("type", "date");
fechaInputEdOp.setAttribute("name", " ");
fechaInputEdOp.id = "editar-fecha-input";

const buttonDivEdOp = document.createElement("div");
buttonDivEdOp.className = "buttons mt-6";

const cancelarButtonEdOp = document.createElement("button");
cancelarButtonEdOp.className = "button is-light";
cancelarButtonEdOp.id = "cancelar-editar-operacion-boton";
cancelarButtonEdOp.textContent = "Cancelar";

const editarButtonEdOp = document.createElement("button");
editarButtonEdOp.className = "button is-success";
editarButtonEdOp.id = "editar-categoria-boton";
editarButtonEdOp.textContent = "Editar";

// appendChild
bEditOp.appendChild(sectionEditOper);
sectionEditOper.appendChild(divContEdOp);
divContEdOp.appendChild(divColmsEdOp);
divColmsEdOp.appendChild(divColEdOp);
divColEdOp.appendChild(divBoxEdOp);
divBoxEdOp.appendChild(titleEdOp);

divBoxEdOp.appendChild(fielDescEdOp);
fielDescEdOp.appendChild(descLabelEdOp);
fielDescEdOp.appendChild(descControlEdOp);
descControlEdOp.appendChild(divDescInputEdOp);
divDescInputEdOp.appendChild(descInputEdOp);

divBoxEdOp.appendChild(fielMontoEdOp);
fielMontoEdOp.appendChild(montoLabelEdOp);
fielMontoEdOp.appendChild(montoControl1);
montoControl1.appendChild(montoControl2);
montoControl2.appendChild(montoDivEdOp);
montoDivEdOp.appendChild(montoInputEdOp);

divBoxEdOp.appendChild(fielTipoEdOp);
fielTipoEdOp.appendChild(tipoLabelEdOp);
fielTipoEdOp.appendChild(tipoControlEdOp);
tipoControlEdOp.appendChild(tipoDivEdOp);
tipoDivEdOp.appendChild(tipoSelectEdOp);
tipoSelectEdOp.appendChild(optionGastOp);
tipoSelectEdOp.appendChild(optionGanOp);

divBoxEdOp.appendChild(fielCatEdOp);
fielCatEdOp.appendChild(catLabelEdOp);
fielCatEdOp.appendChild(catControlEdOp);
catControlEdOp.appendChild(catDivEdOp);
catDivEdOp.appendChild(catSelectEdOp);
catSelectEdOp.appendChild(optionServicio);

divBoxEdOp.appendChild(fielFechaEdOp);
fielFechaEdOp.appendChild(fecLabelEdOp);
fecLabelEdOp.appendChild(fechaControl1);
fechaControl1.appendChild(fechaControl2);
fechaControl2.appendChild(fechaInputEdOp);
divBoxEdOp.appendChild(buttonDivEdOp);
buttonDivEdOp.appendChild(cancelarButtonEdOp);
buttonDivEdOp.appendChild(editarButtonEdOp);
