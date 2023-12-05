//Solo nombre y apellido son obligatorios

let $ = id => document.getElementById(id)

let validacionCorrecta=(campo)=>{
    $(`form_register_asterisco_${campo.id}`).innerText=' ✓';
    $(`form_register_asterisco_${campo.id}`).style.color='gold';
    $(`form_register_asterisco_${campo.id}`).style.fontWeight='bold';
    $(campo.id).style.border='2px solid gold'
}
let validacionIncorrecta=(campo)=>{
    $(`form_register_asterisco_${campo.id}`).innerText=' *';
    $(`form_register_asterisco_${campo.id}`).style.color='red';
    $(`form_register_asterisco_${campo.id}`).style.fontWeight='bold';
    $(campo.id).style.border='2px solid red'
    $(`form_register_asterisco_${campo.id}`).hidden=false;
}
let validarCampo=(campo,nombre)=>{
    $(`${campo.id}_error`).hidden=true;
    
        if($(campo.id).value.trim().length<2){
            if($(campo.id).value.trim().length==1){
                $(`register_form_${campo.id}`).innerText = `* El ${nombre} debe tener min. 2 caracteres`
                $(`register_form_${campo.id}`).hidden = false;
                validacionIncorrecta(campo)
            }else{
                $(`register_form_${campo.id}`).innerText = `* El ${nombre} es obligatorio`
                $(`register_form_${campo.id}`).hidden = false;
                validacionIncorrecta(campo)
            }
        }else{
            if(!(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test($(campo.id).value.trim()))){
                $(`register_form_${campo.id}`).innerText = `* El ${nombre} debe tener solo letras`
                $(`register_form_${campo.id}`).hidden = false;
                validacionIncorrecta(campo)
            }else{
                $(`register_form_${campo.id}`).hidden = true;
            validacionCorrecta(campo)
            }
        }
}
    $('name').addEventListener('blur',function(){
        validarCampo(this,'nombre');
    })
    $('name').addEventListener('keyup',function(){
        validarCampo(this,'nombre');
    })
    $('surname').addEventListener('blur',function(){
        validarCampo(this,'apellido');
    })
    $('surname').addEventListener('keyup',function(){
        validarCampo(this,'apellido');
    })