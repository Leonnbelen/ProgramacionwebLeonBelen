//GOOGLE MAPS============================================================
function iniciarMap(){
  var coordenadas = {lat: -43.07016246837909, lng: -71.47421877116459};

  var map = new google.maps.Map(document.getElementById('mapajs'),{
    zoom: 15,
    center: coordenadas
  });

  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map
  });
}

//FORMULARIO DE RESERVA====================================================

document.getElementById('reservaForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const fechaEntrada = document.getElementById('fechaEntrada').value;
  const fechaSalida = document.getElementById('fechaSalida').value;

  if (!nombre || !email || !telefono || !fechaEntrada || !fechaSalida) {
      alert('Por favor, complete todos los campos.');
      return;
  }

  if (new Date(fechaSalida) <= new Date(fechaEntrada)) {
      alert('La fecha de salida debe ser posterior a la fecha de entrada.');
      return;
  }

  alert('Formulario enviado correctamente.');
});

//BUSCADOR DE CABANAS======================================================================

const cabañas = [
  { nombre: 'Cabaña Los Andes', url: 'pagina_cabana_1.html' },
  { nombre: 'Cabaña El Refugio', url: 'pagina_cabana_2.html' },
  { nombre: 'Cabaña La Montaña', url: 'pagina_cabana_3.html' },
  { nombre: 'Cabaña El Bosque', url: 'pagina_cabana_4.html' },
  { nombre: 'Cabaña El Rio', url: 'pagina_cabana_5.html' }
];


function buscarCabanas() {
  const query = document.getElementById('buscadorInput').value.toLowerCase();
  const resultados = cabañas.filter(cabana => cabana.nombre.toLowerCase().includes(query));
  mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
  const listaResultados = document.getElementById('resultadoBusqueda');
  listaResultados.innerHTML = '';

  if (resultados.length > 0) {
      resultados.forEach(cabana => {
          const item = document.createElement('li');
          const enlace = document.createElement('a');
          enlace.textContent = cabana.nombre;
          enlace.href = cabana.url;
          item.appendChild(enlace);
          listaResultados.appendChild(item);
      });
  } else {
      listaResultados.innerHTML = '<li>No se encontraron cabañas.</li>';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  mostrarResultados(cabañas);
});
document.getElementById('buscadorInput').addEventListener('input', buscarCabanas);

