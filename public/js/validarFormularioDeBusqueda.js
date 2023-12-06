const formulariosBusqueda = document.querySelectorAll('.search-form');

formulariosBusqueda.forEach(formulario => {
  formulario.addEventListener('submit', function(event) {

    const inputBusqueda = formulario.querySelector('input[name="keywords"]');

    if (inputBusqueda.value.trim() === '') {

      event.preventDefault();
      console.log('No se permitió la búsqueda porque el campo está vacío.');
    }
  });
});