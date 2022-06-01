const body = document.body;
const header = document.createElement("header");
const nav = document.createElement("nav");
nav.className = "navbar has-shadow is-spaced is-primary";

const mainDiv = document.createElement("div");
mainDiv.classList.add("navbar-title");

const mainAnchor = document.createElement("a");
mainAnchor.classList.add("navbar-home");

const mainTitle = document.createElement("h1");
mainTitle.className = "title is-size-2-desktop is-size-3 has-text-white";
mainTitle.textContent = "AhorrADAs";

const divBurger = document.createElement("div");

const spanBurger1 = document.createElement("span");
const spanBurger2 = document.createElement("span");
const spanBurger3 = document.createElement("span");

const divMenu = document.createElement("div");
divMenu.classList.add("navbar-menu");

const divIcono = document.createElement("div");
divIcono.classList.add("navbar-end");

const anchorBalance = document.createElement("A");
anchorBalance.className = "navbar-item";
anchorBalance.innerHTML =
  "<i class='fa-solid fa-list-ol'aria-hidden='true'></i>";
anchorBalance.textContent = "Balance";

const anchorCategory = document.createElement("A");
anchorCategory.className = "navbar-item";
anchorCategory.innerHTML =
  "<i class='fa-solid fa-clipboard-check' aria-hidden='true'></i>";
anchorCategory.textContent = "Categoria";

const anchorReport = document.createElement("A");
anchorReport.className = "navbar-item";
anchorReport.innerHTML =
  "<i class='fa-solid fa-align-justify'aria-hidden='true'></i>";
anchorReport.textContent = "Reporte";

body.appendChild(header);
header.appendChild(nav);
nav.appendChild(mainDiv);
mainDiv.appendChild(mainAnchor);
mainDiv.appendChild(divBurger);
mainAnchor.appendChild(mainTitle);
divBurger.appendChild(spanBurger1);
divBurger.appendChild(spanBurger2);
divBurger.appendChild(spanBurger3);
nav.appendChild(divMenu);
divMenu.appendChild(divIcono);
divIcono.appendChild(anchorBalance);
divIcono.appendChild(anchorCategory);
divIcono.appendChild(anchorReport);
