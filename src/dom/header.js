const bheader = document.body;
const header = document.createElement("header");
const mainNav = document.createElement("nav");
mainNav.className = "navbar has-shadow is-spaced is-primary";
mainNav.setAttribute("role", "navigation");
mainNav.ariaLabel = "main navigation";

const mainDiv = document.createElement("div");
mainDiv.classList.add("navbar-brand");

const mainAnchor = document.createElement("a");
mainAnchor.classList.add("navbar-item");

const iconTitle = document.createElement("icon");
iconTitle.className = "fas fa-piggy-bank mr-2";
iconTitle.ariaHidden = "true";

const mainTitle = document.createElement("h1");
mainTitle.className = "title is-size-2-desktop is-size-3 has-text-white";
mainTitle.textContent = " AhorrADAs ";

const divBurger = document.createElement("div");
divBurger.id = "responsive-burger";
divBurger.className = "navbar-burger burger";

const spanBurger1 = document.createElement("span");
const spanBurger2 = document.createElement("span");
const spanBurger3 = document.createElement("span");

const divMenu = document.createElement("div");
divMenu.id = "responsive-navbar-menu";
divMenu.classList.add("navbar-menu");

const divIcono = document.createElement("div");
divIcono.classList.add("navbar-end");

const anchorBalance = document.createElement("A");
anchorBalance.className = "navbar-item";
anchorBalance.id = "ver-balance";
const divTextBal = document.createElement("div");
divTextBal.textContent = " Balance ";
const iconBalance = document.createElement("icon");
iconBalance.className = " fas fa-chart-pie mr-2 ";
iconBalance.ariaHidden = "true";

const anchorCategory = document.createElement("A");
anchorCategory.className = "navbar-item";
anchorCategory.id = "ver-categorias";
const divTextCat = document.createElement("div");
divTextCat.textContent = " Categoria ";
const iconCat = document.createElement("icon");
iconCat.className = "fas fa-check mr-2";
iconCat.ariaHidden = "true";

const anchorReport = document.createElement("A");
anchorReport.className = "navbar-item";
anchorReport.id = "ver-reportes";
const divTextRep = document.createElement("div");
divTextRep.textContent = " Reporte ";
const iconReport = document.createElement("icon");
iconReport.className = "fas fa-bars mr-2";
iconReport.ariaHidden = "true";

bheader.appendChild(header);
header.appendChild(mainNav);
mainNav.appendChild(mainDiv);
mainDiv.appendChild(mainAnchor);
mainDiv.appendChild(divBurger);

mainAnchor.appendChild(mainTitle);
mainTitle.appendChild(iconTitle);

divBurger.appendChild(spanBurger1);
divBurger.appendChild(spanBurger2);
divBurger.appendChild(spanBurger3);
mainNav.appendChild(divMenu);
divMenu.appendChild(divIcono);
divIcono.appendChild(anchorBalance);
anchorBalance.appendChild(iconBalance);
anchorBalance.appendChild(divTextBal);

divIcono.appendChild(anchorCategory);
anchorCategory.appendChild(iconCat);
anchorCategory.appendChild(divTextCat);

divIcono.appendChild(anchorReport);
anchorReport.appendChild(iconReport);
anchorReport.appendChild(divTextRep);
