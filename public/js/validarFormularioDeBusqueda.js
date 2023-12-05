function validarFormulario() {
    var keywords = document.querySelector('.search-form_input').value.trim();
    if (keywords === '') {
        alert('Por favor, ingresa palabras clave antes de buscar.');
        return false;
    }
    return true;
}