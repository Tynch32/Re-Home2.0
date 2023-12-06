function validarFormulario() {
    var keywords = document.querySelector('.search-form_input').value.trim();
    if (keywords == '') {
        return true;
    }
    return false;
}