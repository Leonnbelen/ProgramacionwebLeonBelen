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
