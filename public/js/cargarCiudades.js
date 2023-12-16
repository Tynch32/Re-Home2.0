var provinciaSelect = document.getElementById('province');

provinciaSelect.addEventListener('change',function () {
    var ciudadSelect = document.getElementById('city');
      ciudadSelect.innerHTML = ''; // Limpiar opciones anteriores

      var selectedProvinciaId = provinciaSelect.value;

      if (selectedProvinciaId) {
        // Llamada a la API de localidades por provincia
        fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${selectedProvinciaId}&max=1000`)
          .then(response => response.json())
          .then(data => {
            var ciudadesOrdenadas = data.localidades.sort((a, b) => a.nombre.localeCompare(b.nombre));
            ciudadesOrdenadas.forEach(ciudad => {
              var option = document.createElement('option');
              option.value = ciudad.id;
              option.text = ciudad.nombre;
              ciudadSelect.appendChild(option);
            });
          })
          .catch(error => console.error('Error al obtener las ciudades:', error));
    }
})
    
    