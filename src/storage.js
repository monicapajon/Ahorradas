/*Local Storage*/

const obtenerDatos = () => {
  return JSON.parse(localStorage.getItem("datos"));
};

const actualizarDatos = (datos) => {
  localStorage.setItem(
    "datos",
    JSON.stringify({ ...obtenerDatos(), ...datos })
  );
  mostrarDatos();
};

const mostrarDatos = () => {
  actualizarCategorias();
  actualizarOperaciones();
  actualizarBalance();
  filtrarOperaciones();
  actualizarReportes();
};

const obtenerCategorias = () => {
  return obtenerDatos().categorias;
};

const obtenerOperaciones = () => {
  return obtenerDatos().operaciones;
};

/*Selectors*/

let $ = (selector) => document.querySelector(selector);

let $$ = (selector) => document.querySelectorAll(selector);

/* Sobre operaciones*/

const reiniciarVistaOperacion = () => {
  $("#descripcion-input").value = "";
  $("#monto-input").value = 0;
  $("#tipo-operacion").value = "GASTO";
  $("#fecha-input").valueAsDate = new Date();
};

const agregarOperacionHandler = () => {
  const operaciones = obtenerOperaciones();

  const descripcion = $("#descripcion-input").value;
  const monto = Number($("#monto-input").value);
  const tipo = $("#tipo-operacion").value;
  const categoria = $("#categorias-select").value;
  const fecha = $("#fecha-input").value.replace(/-/g, "/");

  const operacion = crearOperacion({
    descripcion,
    tipo: OPERACIONES[tipo],
    monto,
    categoria,
    fecha,
  });

  const operacionesActualizadas = agregarOperacion(operacion, operaciones);
  actualizarDatos({ operaciones: operacionesActualizadas });
  reiniciarVistaOperacion();
  mostrarVista("balance");
};

const actualizarOperaciones = (operaciones = obtenerOperaciones()) => {
  if (!operaciones.length) {
    $("#sin-operaciones").classList.remove("is-hidden");
    $("#con-operaciones").classList.add("is-hidden");
    return;
  }

  $("#con-operaciones").classList.remove("is-hidden");
  $("#sin-operaciones").classList.add("is-hidden");

  const lista = $("#operaciones");

  lista.innerHTML = "";

  for (let operacion of operaciones) {
    const categoria = obtenerCategoria(
      operacion.categoria,
      obtenerCategorias()
    );
    const itemOperacion = document.createElement("div");
    const fecha = new Date(operacion.fecha);

    itemOperacion.classList.add("mb-3");

    itemOperacion.innerHTML = `
      <div class="columns is-multiline is-mobile is-vcentered">
        <div class="column is-3-tablet is-6-mobile">
          <h3 class="has-text-weight-semibold">${operacion.descripcion}</h3>
        </div>
        <div
          class="column is-3-tablet is-6-mobile has-text-right-mobile"
        >
          <span class="tag is-primary is-light">${categoria.nombre}</span>
        </div>
        <div
          class="column is-2-tablet has-text-grey is-hidden-mobile has-text-right-tablet"
        >
          ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}
        </div>
        <div
          class="column is-2-tablet is-6-mobile has-text-weight-bold has-text-right-tablet is-size-4-mobile ${
            operacion.tipo === OPERACIONES.GANANCIA
              ? "has-text-success"
              : "has-text-danger"
          }"
        >
          ${operacion.tipo === OPERACIONES.GANANCIA ? "+" : "-"}$${
      operacion.monto
    }
        </div>
        <div class="column is-2-tablet is-6-mobile has-text-right">
          <p class="is-fullwidth">
            <a href="#" class="mr-3 is-size-7 edit-link">Editar</a>
            <a href="#" class="is-size-7 delete-link">Eliminar</a>
          </p>
        </div>
      </div>  
      `;

    const editarAccion = itemOperacion.querySelector(".edit-link");
    const eliminarAccion = itemOperacion.querySelector(".delete-link");

    editarAccion.onclick = () => {
      cargarDatosOperacion(operacion.id);
      mostrarVista("editar-operacion");
    };

    eliminarAccion.onclick = () => {
      eliminarOperacionHandler(operacion.id);
    };

    lista.append(itemOperacion);
  }
};

const filtrarOperaciones = () => {
  const tipo = $("#filtro-tipo").value;
  const categoria = $("#filtro-categoria").value;
  const fecha = new Date($("#filtro-fecha").value.replace(/-/g, "/"));
  const orden = $("#filtro-orden").value;

  let operaciones = obtenerOperaciones();

  if (tipo !== "TODOS") {
    operaciones = filtrarPorTipo(tipo, operaciones);
  }

  if (categoria !== "TODAS") {
    operaciones = filtrarPorCategoria(categoria, operaciones);
  }

  operaciones = filtrarPorFechaMayorOIgualA(fecha, operaciones);

  switch (orden) {
    case "MAS_RECIENTES":
      operaciones = ordernarPorFecha(operaciones, "DESC");
      break;
    case "MENOS_RECIENTES":
      operaciones = ordernarPorFecha(operaciones, "ASC");
      break;
    case "MAYOR_MONTO":
      operaciones = ordernarPorMonto(operaciones, "DESC");
      break;
    case "MENOR_MONTO":
      operaciones = ordernarPorMonto(operaciones, "ASC");
      break;
    case "A/Z":
      operaciones = ordernarPorDescripcion(operaciones, "ASC");
      break;
    case "Z/A":
      operaciones = ordernarPorDescripcion(operaciones, "DESC");
      break;
    default:
  }

  actualizarOperaciones(operaciones);
  actualizarBalance(operaciones);
};

const eliminarOperacionHandler = (idOperacion) => {
  const operaciones = eliminarOperacion(idOperacion, obtenerOperaciones());
  actualizarDatos({ operaciones });
};

const cargarDatosOperacion = (id) => {
  const operacion = obtenerOperacion(id, obtenerOperaciones());
  $("#editar-descripcion-input").value = operacion.descripcion;
  $("#editar-monto-input").value = operacion.monto;
  $("#editar-categorias-select").value = operacion.categoria;
  $("#editar-fecha-input").valueAsDate = new Date(operacion.fecha);
  $("#editar-tipo-operacion").value = operacion.tipo.toUpperCase();
  $("#editar-operacion-boton").onclick = () => editarOperacionHandler(id);
};

const editarOperacionHandler = (id) => {
  const descripcion = $("#editar-descripcion-input").value;
  const monto = Number($("#editar-monto-input").value);
  const categoria = $("#editar-categorias-select").value;
  const tipo = $("#editar-tipo-operacion").value;
  const fecha = $("#editar-fecha-input").value.replace(/-/g, "/");

  const operaciones = editarOperacion(
    id,
    {
      descripcion,
      monto,
      categoria,
      tipo,
      fecha,
    },
    obtenerOperaciones()
  );
  actualizarDatos({ operaciones });
};

/*Sobre Categorias*/

const actualizarSelectoresCategorias = () => {
  const selects = $$(".categorias-select");

  for (let select of selects) {
    select.innerHTML = select.classList.contains("filtro-categoria")
      ? '<option value="TODAS">Todas</option>'
      : "";
    for (let categoria of obtenerCategorias()) {
      select.innerHTML += `<option value="${categoria.id}">${categoria.nombre}</option>`;
    }
  }
};

const actualizarListaCategorias = () => {
  const lista = $("#categorias");

  lista.innerHTML = "";

  for (let categoria of obtenerCategorias()) {
    const itemCategoria = document.createElement("div");
    itemCategoria.classList.add("mb-3");
    itemCategoria.innerHTML = `
      <div class="columns is-vcentered is-mobile">
        <div class="column">
          <span class="tag is-primary is-light">${categoria.nombre}</span>
        </div>
        <div class="column is-narrow has-text"
          <p class="is-fullwidth has-text-right-tablet">
            <a href="#" class="mr-4 is-size-7 edit-link">Editar</a>
            <a href="#" class="is-size-7 delete-link">Eliminar</a>
          </p>
        </div>
      </div>`;

    const editarAccion = itemCategoria.querySelector(".edit-link");
    const eliminarAccion = itemCategoria.querySelector(".delete-link");

    editarAccion.onclick = () => {
      cargarDatosCategoria(categoria.id);
      mostrarVista("editar-categoria");
    };

    eliminarAccion.onclick = () => {
      eliminarCategoriaHandler(categoria.id);
    };

    lista.append(itemCategoria);
  }
};

const actualizarCategorias = () => {
  actualizarSelectoresCategorias();
  actualizarListaCategorias();
};

const agregarCategoriaHandler = () => {
  const nombre = $("#categoria-input").value;
  const categoria = crearCategoria(nombre);
  const categorias = agregarCategoria(categoria, obtenerCategorias());
  actualizarDatos({ categorias });
};

const eliminarCategoriaHandler = (categoriaId) => {
  const categorias = eliminarCategoria(categoriaId, obtenerCategorias());

  const operacionesPorCategoria = filtrarPorCategoria(
    categoriaId,
    obtenerOperaciones()
  );

  for (let operacion of operacionesPorCategoria) {
    const operaciones = eliminarOperacion(operacion.id, obtenerOperaciones());
    actualizarDatos({ operaciones });
  }

  actualizarDatos({ categorias });
  mostrarVista("categoria");
};

const cargarDatosCategoria = (id) => {
  const categoria = obtenerCategoria(id, obtenerCategorias());
  $("#editar-categoria-input").value = categoria.nombre;
  $("#editar-categoria-boton").onclick = () => editarCategoriaHandler(id);
};

const editarCategoriaHandler = (id) => {
  const nombre = $("#editar-categoria-input").value;
  const categorias = editarCategoria(id, { nombre }, obtenerCategorias());
  actualizarDatos({ categorias });
};

/*Sobre Balance*/

const actualizarBalance = (operaciones = obtenerOperaciones()) => {
  const { ganancias, gastos, balance } = obtenerBalance(operaciones);
  $("#ganancias").innerHTML = `+$${Math.abs(ganancias)}`;
  $("#gastos").innerHTML = `-$${Math.abs(gastos)}`;

  $("#balance").classList.remove("has-text-danger", "has-text-success");
  let operador = "";

  if (balance > 0) {
    $("#balance").classList.add("has-text-success");
    operador = "+";
  } else if (balance < 0) {
    $("#balance").classList.add("has-text-danger");
    operador = "-";
  }

  $("#balance").innerHTML = `${operador}$${Math.abs(balance)}`;
};

const alternarFiltros = () => {
  const toggle = $("#toggle-filtros");
  const filtros = $("#filtros");

  if (toggle.innerText === "Ocultar filtros") {
    toggle.innerText = "Mostrar filtros";
    filtros.classList.add("is-hidden");
  } else {
    toggle.innerText = "Ocultar filtros";
    filtros.classList.remove("is-hidden");
  }
};

/*Sobre reportes*/

const generarResumen = () => {
  const operaciones = obtenerOperaciones();
  const categorias = obtenerCategorias();
  const reporte = obtenerResumen(operaciones, categorias);

  if (
    !filtrarPorTipo(OPERACIONES.GANANCIA, operaciones).length ||
    !filtrarPorTipo(OPERACIONES.GASTO, operaciones).length
  ) {
    $("#sin-reportes").classList.remove("is-hidden");
    $("#con-reportes").classList.add("is-hidden");
    return;
  }

  $("#con-reportes").classList.remove("is-hidden");
  $("#sin-reportes").classList.add("is-hidden");

  // mayor ganancia
  $("#categoria-mayor-ganancia").innerText = obtenerCategoria(
    reporte.categorias.mayorGanancia.categoria,
    categorias
  ).nombre;

  $(
    "#categoria-mayor-ganancia-monto"
  ).innerText = `+$${reporte.categorias.mayorGanancia.monto}`;

  // mayor gasto
  $("#categoria-mayor-gasto").innerText = obtenerCategoria(
    reporte.categorias.mayorGasto.categoria,
    categorias
  ).nombre;

  $(
    "#categoria-mayor-gasto-monto"
  ).innerText = `-$${reporte.categorias.mayorGasto.monto}`;

  // mayor balance
  $("#categoria-mayor-balance").innerText = obtenerCategoria(
    reporte.categorias.mayorBalance.categoria,
    categorias
  ).nombre;

  $(
    "#categoria-mayor-balance-monto"
  ).innerText = `$${reporte.categorias.mayorBalance.monto}`;

  /*Reportes de los Meses*/

  // mayor ganancia
  $("#mes-mayor-ganancia").innerText = reporte.meses.mayorGanancia.fecha;

  $(
    "#mes-mayor-ganancia-monto"
  ).innerText = `$${reporte.categorias.mayorGanancia.monto}`;

  // mayor gasto
  $("#mes-mayor-gasto").innerText = reporte.meses.mayorGasto.fecha;

  $(
    "#mes-mayor-gasto-monto"
  ).innerText = `-$${reporte.categorias.mayorGasto.monto}`;
};

const generarReporte = (tipo) => {
  const operaciones = obtenerOperaciones();
  const reporte =
    tipo === "mes"
      ? obtenerTotalesPorMes(operaciones)
      : obtenerTotalesPorCategoria(operaciones);

  const $reporte =
    tipo === "mes" ? $("#reporte-mes") : $("#reporte-categorias");

  $reporte.innerHTML = `
      <div class="columns is-mobile">
        <div class="column">
          <h4 class="has-text-weight-semibold">${
            tipo === "mes" ? "Mes" : "Categoria"
          }</h4>
        </div>
        <div class="column">
          <h4 class="has-text-weight-semibold has-text-right  ">Ganancias</h4>
        </div>
        <div class="column">
          <h4 class="has-text-weight-semibold has-text-right">Gastos</h4>
        </div>
        <div class="column">
          <h4 class="has-text-weight-semibold has-text-right">Balance</h4>
        </div>
      </div>
    `;

  for (let item in reporte) {
    const itemReporte = document.createElement("div");

    itemReporte.classList.add("columns", "is-vcentered", "is-mobile");
    itemReporte.innerHTML = `
        <div class="column">
          <h3 class="has-text-weight-semibold">${item}</h3>
        </div>
        <div class="column has-text-success has-text-right">
          +$${reporte[item].ganancia}
        </div>
        <div class="column has-text-danger has-text-right">
          -$${reporte[item].gasto}
        </div>
        <div class="column has-text-right">
          $${reporte[item].balance}
        </div>
      `;

    $reporte.append(itemReporte);
  }
};

const actualizarReportes = () => {
  generarResumen();
  generarReporte("mes");
  generarReporte("categoria");
};

/* ocultar o mostrar*/

const mostrarVista = (nombre) => {
  const vistas = $$(".vista");

  for (let vista of vistas) {
    vista.classList.add("is-hidden");
  }

  $(`#vista-${nombre}`).classList.remove("is-hidden");
};

/*toogle*/

const toggleMenu = () => {
  const burger = $(".navbar-burger");
  const menu = $(".navbar-menu");

  if (burger.classList.contains("is-active")) {
    burger.classList.remove("is-active");
    menu.classList.remove("is-active");
  } else {
    burger.classList.add("is-active");
    menu.classList.add("is-active");
  }
};

/*inicializar*/
const inicializarDatos = () => {
  if (obtenerDatos()) {
    mostrarDatos();
  } else {
    const categorias = [
      "Comida",
      "Servicios",
      "Salidas",
      "Educación",
      "Transporte",
      "Trabajo",
    ].map((categoria) => crearCategoria(categoria));

    actualizarDatos({
      operaciones: [],
      categorias,
      cuentas: [],
    });
  }
};

const inicializarVistas = () => {
  $("#ver-operacion").addEventListener("click", () =>
    mostrarVista("operacion")
  );
  $("#ver-categorias").addEventListener("click", () =>
    mostrarVista("categoria")
  );
  $("#ver-balance").addEventListener("click", () => mostrarVista("balance"));
  $("#ver-reportes").addEventListener("click", () => mostrarVista("reportes"));
};

const inicializarOperaciones = () => {
  $("#agregar-operacion-boton").addEventListener(
    "click",
    agregarOperacionHandler
  );
  $("#cancelar-agregar-operacion-boton").addEventListener("click", () =>
    mostrarVista("balance")
  );
  $("#cancelar-editar-operacion-boton").addEventListener("click", () =>
    mostrarVista("balance")
  );
};

const inicializarBalance = () => {
  $("#filtro-tipo").addEventListener("change", filtrarOperaciones);
  $("#filtro-categoria").addEventListener("change", filtrarOperaciones);
  $("#filtro-fecha").addEventListener("change", filtrarOperaciones);
  $("#filtro-orden").addEventListener("change", filtrarOperaciones);

  $("#toggle-filtros").addEventListener("click", alternarFiltros);
};

const inicializarCategorias = () => {
  $("#agregar-categoria-boton").addEventListener(
    "click",
    agregarCategoriaHandler
  );
  $("#cancelar-categoria-boton").addEventListener("click", () =>
    mostrarVista("categoria")
  );
};

const inicializar = () => {
  for (let input of $$('input[type="date"]')) {
    input.valueAsDate = new Date();
  }

  $(".navbar-burger").addEventListener("click", toggleMenu);

  inicializarDatos();
  inicializarVistas();

  inicializarOperaciones();
  inicializarCategorias();

  inicializarBalance();
};

window.onload = inicializar;
