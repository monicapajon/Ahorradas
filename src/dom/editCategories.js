const bEditCat = document.body;
const sectEditCat = document.createElement("section");
sectEditCat.className = "section mt-5 is-hidden vista";
sectEditCat.id = "vista-editar-categoria";

const divContainer = document.createElement("div");
divContainer.classList.add("container");

const divColumsEditCat = document.createElement("div");
divColumsEditCat.className = "columns is-multiline";

const divColumEditCat = document.createElement("div");
divColumEditCat.className =
  "column is-8-widescreen is-10-desktop is-offset-2-widescreen is-offset-1-desktop";

const divBoxCat = document.createElement("div");
divBoxCat.classList.add("box");
const editTitle = document.createElement("h2");
editTitle.className = "title is-size-2 has-text-weight-bold";
editTitle.textContent = "Editar Categoria";
const labelEdit = document.createElement("label");
labelEdit.className = "label mt-6";
labelEdit.for = "editar-categoria-input";
labelEdit.textContent = "Nombre";

const divFieldEdit = document.createElement("div");
divFieldEdit.className = "field is-grouped";

const divControlEdit = document.createElement("div");
divControlEdit.className = "control is-expanded";

const inputEditCat = document.createElement("input");
inputEditCat.className = "input";
inputEditCat.type = "text";
inputEditCat.name = "";
inputEditCat.id = "editar-categoria-input";

const divButtonEdit = document.createElement("div");
divButtonEdit.className = "buttons mt-6";

const buttonCancel = document.createElement("button");
buttonCancel.className = "button is-light";
buttonCancel.id = "cancelar-categoria-boton";
buttonCancel.textContent = "Cancelar";

const buttonEditCat = document.createElement("button");
buttonEditCat.className = "button is-success";
buttonEditCat.id = "editar-categoria-boton";
buttonEditCat.textContent = "Editar";

bEditCat.appendChild(sectEditCat);
sectEditCat.appendChild(divContainer);
divContainer.appendChild(divColumsEditCat);
divColumsEditCat.appendChild(divColumEditCat);
divColumEditCat.appendChild(divBoxCat);
divBoxCat.appendChild(editTitle);
divBoxCat.appendChild(labelEdit);
divBoxCat.appendChild(divFieldEdit);
divFieldEdit.appendChild(divControlEdit);
divControlEdit.appendChild(inputEditCat);
divBoxCat.appendChild(divButtonEdit);
divButtonEdit.appendChild(buttonCancel);
divButtonEdit.appendChild(buttonEditCat);
