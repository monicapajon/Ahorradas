//categories//
const bCategory = document.body;
const sectionCategory = document.createElement("section");
sectionCategory.className = "section mt-5 is-hidden vista";
sectionCategory.id = "vista-categoria";

const containerCategory = document.createElement("div");
containerCategory.className = "container";

const category1 = document.createElement("div");
category1.className = "columns is-multiline";

const category2 = document.createElement("div");
category2.className =
  "column is-8-widescreen is-10-desktop is-offset-2-widescreen is-offset-1-desktop";

const boxCategory = document.createElement("div");
boxCategory.classList.add("box");
const titleCategory = document.createElement("h2");
titleCategory.className = "title is-size-2 has-text-weight-bold";
titleCategory.textContent = "Categoria";

const labelCategory = document.createElement("label");
labelCategory.className = "label mt-6";
labelCategory.htmlFor = "categoria-input";
labelCategory.textContent = "Nombre";

const inputDiv = document.createElement("div");
inputDiv.className = "field is-grouped";
const controlDiv = document.createElement("div");
controlDiv.className = "control is-expanded";

const inputCategory = document.createElement("input");
inputCategory.classList.add("input");
inputCategory.className = "input";
inputCategory.setAttribute("type", "text");
inputCategory.setAttribute("name", " ");
inputCategory.id = "categoria-input";

const divButton = document.createElement("div");
divButton.className = "control";
const button = document.createElement("button");
button.className = "button is-success";
button.id = "agregar-categoria-boton";
button.textContent = "Agregar";

const divAddCategory = document.createElement("div");
divAddCategory.className = "mt-6";
divAddCategory.id = "categorias";

//appendchild category//
bCategory.appendChild(sectionCategory);
sectionCategory.appendChild(containerCategory);
containerCategory.appendChild(category1);
category1.appendChild(category2);
category2.appendChild(boxCategory);
boxCategory.appendChild(titleCategory);
boxCategory.appendChild(labelCategory);
boxCategory.appendChild(inputDiv);
inputDiv.appendChild(controlDiv);
controlDiv.appendChild(inputCategory);
boxCategory.appendChild(divButton);
divButton.appendChild(button);
boxCategory.appendChild(divAddCategory);
