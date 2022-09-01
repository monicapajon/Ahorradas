
const obtenerDatos = () => {
  return JSON.parse(localStorage.getItem('datos'))
};

const actualizarDatos = (datos) => {
  localStorage.setItem('datos', JSON.stringify({ ...obtenerDatos(), ...datos }))
  mostrarDatos()
};

const mostrarDatos = () => {
  actualizarCategorias()
  actualizarOperaciones()
  actualizarBalance()
  filtrarOperaciones()
  actualizarReportes()
};

const obtenerCategorias = () => {
  return obtenerDatos().categorias;
};

const obtenerOperaciones = () => {
  return obtenerDatos().operaciones;
};

const descripcionInput = document.getElementById("descripcion-input")
const montoInput = document.getElementById("monto-input");
const tipoOperacion = document.getElementById("tipo-operacion");
const dateInput = document.getElementById("fecha-input");
const catSelect = document.getElementById("categorias-select");

const reiniciarVistaOperacion = () => {
  descripcionInput.value = "";
  montoInput.value = 0;
  tipoOperacion.value = "GASTO";
  dateInput.valueAsDate = new Date();
};

const agregarOperacionHandler = () => {
  const operaciones = obtenerOperaciones();
  const descripcion = descripcionInput.value;
  const monto = Number(montoInput.value);
  const tipo = tipoOperacion.value;
  const categoria = catSelect.value;
  const fecha = dateInput.value.replace(/-/g, "/");

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

const sinOperaciones = document.getElementById("sin-operaciones");
const conOperaciones = document.getElementById("con-operaciones")

const actualizarOperaciones = (operaciones = obtenerOperaciones()) => {
  if (!operaciones.length) {
    sinOperaciones.classList.remove("is-hidden");
    conOperaciones.classList.add("is-hidden");
    return;
  }
  conOperaciones.classList.remove("is-hidden");
  sinOperaciones.classList.add("is-hidden");

  const lista = document.getElementById("operaciones");

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
            class="column is-2-tablet is-6-mobile has-text-weight-bold has-text-right-tablet is-size-4-mobile ${operacion.tipo === OPERACIONES.GANANCIA
        ? "has-text-success"
        : "has-text-danger"
      }"
          >
            ${operacion.tipo === OPERACIONES.GANANCIA ? "+" : "-"}$${operacion.monto
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

    lista.appendChild(itemOperacion);
  }
};

const filtrarOperaciones = () => {
  const tipo = document.getElementById("filtro-tipo").value;
  const categoria = document.getElementById("filtro-categoria").value;
  const fecha = new Date(document.getElementById("filtro-fecha").value.replace(/-/g, "/"));
  const orden = document.getElementById("filtro-orden").value;

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
      operaciones = operaciones.sort(
        (a, b) => Number(b.monto) - Number(a.monto)
      );
      break;
    case "MENOR_MONTO":
      operaciones = operaciones.sort(
        (a, b) => Number(a.monto) - Number(b.monto)
      );
      break;
    case "A/Z":
      operaciones = operaciones.sort((a, b) => {
        return a.descripcion.localeCompare(b.descripcion, {
          ignorePunctuation: true,
        });
      });
      break;
    case "Z/A":
      operaciones = operaciones
        .sort((a, b) => {
          return a.descripcion.localeCompare(b.descripcion, {
            ignorePunctuation: true,
          });
        })
        .reverse();
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
  document.getElementById("editar-descripcion-input").value = operacion.descripcion;
  document.getElementById("editar-monto-input").value = operacion.monto;
  document.getElementById("editar-categorias-select").value = operacion.categoria;
  document.getElementById("editar-fecha-input").valueAsDate = new Date(operacion.fecha);
  document.getElementById("editar-tipo-operacion").value = operacion.tipo.toUpperCase();
  document.getElementById("editar-operacion-boton").onclick = () => editarOperacionHandler(id);
};

const editarOperacionHandler = (id) => {
  const descripcion = document.getElementById("editar-descripcion-input").value;
  const monto = Number(document.getElementById("editar-monto-input").value);
  const categoria = document.getElementById("editar-categorias-select").value;
  const tipo = document.getElementById("editar-tipo-operacion").value;
  const fecha = document.getElementById("editar-fecha-input").value.replace(/-/g, "/");

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
  mostrarVista("balance");
};

/*Sobre Categorias*/

const actualizarSelectoresCategorias = () => {
  const selects = document.getElementsByClassName("categorias-select");

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
  const lista = document.getElementById("categorias");

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
  const nombre = document.getElementById("categoria-input").value;
  const categoria = crearCategoria(nombre);
  const categorias = agregarCategoria(categoria, obtenerCategorias());
  actualizarDatos({ categorias });
  document.getElementById("categoria-input").value = "";
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
  document.getElementById("editar-categoria-input").value = categoria.nombre;
  document.getElementById("editar-categoria-boton").onclick = () => editarCategoriaHandler(id);
};

const editarCategoriaHandler = (id) => {
  const nombre = document.getElementById("editar-categoria-input").value;
  const categorias = editarCategoria(id, { nombre }, obtenerCategorias());
  actualizarDatos({ categorias });
  mostrarVista("categoria");
};

const actualizarBalance = (operaciones = obtenerOperaciones()) => {
  const { ganancias, gastos, balance } = obtenerBalance(operaciones);
  document.getElementById("ganancias").innerHTML = `+$${Math.abs(ganancias)}`;
  document.getElementById("gastos").innerHTML = `-$${Math.abs(gastos)}`;

  document.getElementById("balance").classList.remove("has-text-danger", "has-text-success");
  let operador = "";

  if (balance > 0) {
    document.getElementById("balance").classList.add("has-text-success");
    operador = "+ ";
  } else if (balance < 0) {
    document.getElementById("balance").classList.add("has-text-danger");
    operador = "- ";
  }

  document.getElementById("balance").innerHTML = `${operador}$${Math.abs(balance)}`;
};

const alternarFiltros = () => {
  const toggle = document.getElementById("toggle-filtros");
  const filtros = document.getElementById("filtro-all");

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
    document.getElementById("sin-reportes").classList.remove("is-hidden");
    document.getElementById("con-reportes").classList.add("is-hidden");
    return;
  }

  document.getElementById("con-reportes").classList.remove("is-hidden");
  document.getElementById("sin-reportes").classList.add("is-hidden");

  // mayor ganancia
  document.getElementById("categoria-mayor-ganancia").innerText = obtenerCategoria(
    reporte.categorias.mayorGanancia.categoria,
    categorias
  ).nombre;

  document.getElementById("categoria-mayor-ganancia-monto").innerText = `+$${reporte.categorias.mayorGanancia.monto}`;

  // mayor gasto
  document.getElementById("categoria-mayor-gasto").innerText = obtenerCategoria(
    reporte.categorias.mayorGasto.categoria,
    categorias
  ).nombre;

  document.getElementById("categoria-mayor-gasto-monto").innerText = `-$${reporte.categorias.mayorGasto.monto}`;

  // mayor balance
  document.getElementById("categoria-mayor-balance").innerText = obtenerCategoria(
    reporte.categorias.mayorBalance.categoria,
    categorias
  ).nombre;

  document.getElementById("categoria-mayor-balance-monto").innerText = `$${reporte.categorias.mayorBalance.monto}`;

  /*Reportes de los Meses*/

  // mayor ganancia
  document.getElementById("mes-mayor-ganancia").innerText = reporte.meses.mayorGanancia.fecha;

  document.getElementById("mes-mayor-ganancia-monto").innerText = `$${reporte.meses.mayorGanancia.monto}`;

  // mayor gasto
  document.getElementById("mes-mayor-gasto").innerText = reporte.meses.mayorGasto.fecha;

  document.getElementById("mes-mayor-gasto-monto").innerText = `-$${reporte.meses.mayorGasto.monto}`;
};

const generarReporte = (tipo) => {
  const operaciones = obtenerOperaciones();
  const reporte =
    tipo === "mes"
      ? obtenerTotalesPorMes(operaciones)
      : obtenerTotalesPorCategoria(operaciones);

  const totalReporte =
    tipo === "mes" ? document.getElementById("reporte-mes") : document.getElementById("reporte-categorias");

  totalReporte.innerHTML = `
        <div class="columns is-mobile">
          <div class="column">
            <h4 class="has-text-weight-semibold">${tipo === "mes" ? "Mes" : "Categoria"
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
            ${reporte[item].balance < 0 ? "-" : ""}$${Math.abs(reporte[item].balance)}
          </div>
        `;

    totalReporte.appendChild(itemReporte);
  }
};

const actualizarReportes = () => {
  generarResumen();
  generarReporte("mes");
  generarReporte("categoria");
};

/* ocultar o mostrar*/

const mostrarVista = (nombre) => {
  const vistas = document.getElementsByClassName("vista");

  for (let vista of vistas) {
    vista.classList.add("is-hidden");
  }

  document.getElementById(`vista-${nombre}`).classList.remove("is-hidden");
};

/*responsive menu*/

const responsiveMenu = () => {
  const burger = document.getElementById("responsive-burger");
  const menu = document.getElementById("responsive-navbar-menu");

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
  document.getElementById("ver-operacion").addEventListener("click", () =>
    mostrarVista("operacion")
  );
  document.getElementById("ver-categorias").addEventListener("click", () =>
    mostrarVista("categoria")
  );
  document.getElementById("ver-balance").addEventListener("click", () => mostrarVista("balance"));
  document.getElementById("ver-reportes").addEventListener("click", () => mostrarVista("reportes"));
};

const inicializarOperaciones = () => {
  document.getElementById("agregar-operacion-boton").addEventListener(
    "click",
    agregarOperacionHandler
  );
  document.getElementById("cancelar-agregar-operacion-boton").addEventListener("click", () =>
    mostrarVista("balance")
  );
  document.getElementById("cancelar-editar-operacion-boton").addEventListener("click", () =>
    mostrarVista("balance")
  );
};

const inicializarBalance = () => {
  document.getElementById("filtro-tipo").addEventListener("change", filtrarOperaciones);
  document.getElementById("filtro-categoria").addEventListener("change", filtrarOperaciones);
  document.getElementById("filtro-fecha").addEventListener("change", filtrarOperaciones);
  document.getElementById("filtro-orden").addEventListener("change", filtrarOperaciones);

  document.getElementById("toggle-filtros").addEventListener("click", alternarFiltros);
};

const inicializarCategorias = () => {
  document.getElementById("agregar-categoria-boton").addEventListener(
    "click",
    agregarCategoriaHandler,
  );
  document.getElementById("cancelar-categoria-boton").addEventListener("click", () =>
    mostrarVista("categoria")
  );
};

const inicializar = () => {
  for (let input of document.getElementsByClassName('input[type="date"]')) {
    input.valueAsDate = new Date();
  }

  document.getElementById("responsive-burger").addEventListener("click", responsiveMenu);

  inicializarDatos();
  inicializarVistas();
  inicializarOperaciones();
  inicializarCategorias();
  inicializarBalance();
};

window.onload = inicializar;
