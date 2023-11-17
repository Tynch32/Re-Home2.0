//nombre apellido email contraseña e imagen son obligatorios

let $ = id => document.getElementById(id)
let validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let validacionCorrecta=(campo)=>{
    $(`form_register_asterisco_${campo.id}`).innerText=' ✓';
    $(`form_register_asterisco_${campo.id}`).style.color='#39b54a';
    $(`form_register_asterisco_${campo.id}`).style.fontWeight='bold';
    $(campo.id).style.border='2px solid #39b54a'
}
let validacionIncorrecta=(campo)=>{
    $(`form_register_asterisco_${campo.id}`).innerText=' *';
    $(`form_register_asterisco_${campo.id}`).style.color='red';
    $(`form_register_asterisco_${campo.id}`).style.fontWeight='bold';
    $(campo.id).style.border='2px solid red'
    $(`form_register_asterisco_${campo.id}`).hidden=false;
}
let coincidenContraseñas=()=>{
    if(($('password').value)==($('password2').value)){
        return true;
    }else{
        return false;
    }
}
let estanCompletosLosCampos= () =>{
    if(validarEmail.test($('email').value)&&($('password').value&&($('name').value)&&($('surname').value)&&
    coincidenContraseñas()&&validacionImagen($('form_image')))){
        $('form_register_asteriscos').hidden=true;
        return true;
    }else{
        $('form_register_asteriscos').hidden=false;
        return false;
    }
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
            if(!(/^[A-Za-z]+$/.test($(campo.id).value.trim()))){
                $(`register_form_${campo.id}`).innerText = `* El ${nombre} debe tener solo letras`
                $(`register_form_${campo.id}`).hidden = false;
                validacionIncorrecta(campo)
            }else{
                $(`register_form_${campo.id}`).hidden = true;
            validacionCorrecta(campo)
            }
        }
}
let validarCampoContraseña=(campo)=>{
    $(`${campo.id}_error`).hidden=true;
    if($(campo.id).value.trim()){
        if(coincidenContraseñas()){
            $(`register_form_${campo.id}`).hidden = true;
            validacionCorrecta(campo)
        }else{
            $(`register_form_${campo.id}`).innerText = `* Las contraseñas no coinciden`
            $(`register_form_${campo.id}`).hidden = false;
            validacionIncorrecta(campo)
        }
    }else{
        $(`register_form_${campo.id}`).hidden = false;
        validacionIncorrecta(campo)
    }
}
let toggleEnabledButton = () => {
    if(estanCompletosLosCampos()){
        $('button_register_success').disabled=false;
        $('button_register_success').style.background='linear-gradient(to right, rgb(143, 94, 37) 0%, rgb(198, 192, 126) 50%, rgb(143, 94, 37) 100%)';
        $('button_register_success').style.border='gold';
    }else{
        $('button_register_success').disabled=true;
        $('button_register_success').style.background='#212529';
        $('button_register_success').style.border='1px solid #212529';
    }
}
let validacionEmail = (email) =>{
    $('email_error').hidden=true;
    if(!validarEmail.test(email.value)){
        if(!email.value.trim()){
            $('register_form_email').innerText="* El email es obligatorio";
            $('register_form_email').hidden = false
            validacionIncorrecta(email)
        }else{
            $('register_form_email').innerText="* Formato de email invalido";
            $('register_form_email').hidden = false
            validacionIncorrecta(email)
        }
    }else{
        $('register_form_email').hidden = true
        validacionCorrecta(email)
    }
}
/*Validaciones:
password_validation_1 = 8 caracteres
password_validation_2 = 1 mayuscula     /[A-Z]/.test(valor)
password_validation_3 = 1 minuscula     /[a-z]/.test(valor)
password_validation_4 = 1 numero        /\d/.test(valor)
password_validation_5 = 1 especial    /[!@#$%^&*(),.?":{}|<>]/.test(valor) */
let validarContraseña = (password) =>{
    let validacion=0;
    if(password.value.length>=8){
        $('password_validation_1').style.color='#39b54a';
        validacion++
    }else{
        $('password_validation_1').style.color='red';
        validacion--
    }
    if(/[A-Z]/.test(password.value)){
        $('password_validation_2').style.color='#39b54a';
        validacion++
    }else{
        $('password_validation_2').style.color='red';
        validacion--
    }
    if(/[a-z]/.test(password.value)){
        $('password_validation_3').style.color='#39b54a';
        validacion++
    }else{
        $('password_validation_3').style.color='red';
        validacion--
    }
    if(/\d/.test(password.value)){
        $('password_validation_4').style.color='#39b54a';
        validacion++
    }else{
        $('password_validation_4').style.color='red';
        validacion--
    }
    if(/[!@#$%^&*(),.?":{}|<>]/.test(password.value)){
        $('password_validation_5').style.color='#39b54a';
        validacion++
    }else{
        $('password_validation_5').style.color='red';
        validacion--
    }
    if(validacion>=5){
        $('register_form_password').hidden=true;
        validacionCorrecta(password)
    }else{
        $('register_form_password').hidden=false;
        validacionIncorrecta(password)
    }
}

    $('email').addEventListener('blur',function(){
        validacionEmail(this);
        toggleEnabledButton();
    })
    $('email').addEventListener('keyup',function(){
        validacionEmail(this);
        toggleEnabledButton();
    })

    $('name').addEventListener('blur',function(){
        validarCampo(this,'nombre');
        toggleEnabledButton();
    })
    $('name').addEventListener('keyup',function(){
        validarCampo(this,'nombre');
        toggleEnabledButton();
    })
    $('surname').addEventListener('blur',function(){
        validarCampo(this,'apellido');
        toggleEnabledButton();
    })
    $('surname').addEventListener('keyup',function(){
        validarCampo(this,'apellido');
        toggleEnabledButton();
    })
    $('password').addEventListener('keyup',function(){
        validarContraseña(this)
        coincidenContraseñas();
        toggleEnabledButton();
    })
    $('password').addEventListener('blur',function(){
        validarContraseña(this)
        coincidenContraseñas();
        toggleEnabledButton();
    })
    $('password2').addEventListener('blur',function(){
        validarCampoContraseña(this)
        coincidenContraseñas();
        toggleEnabledButton();
    })
    $('password2').addEventListener('keyup',function(){
        validarCampoContraseña(this)
        coincidenContraseñas();
        toggleEnabledButton();
    })
    $('form_register_box').addEventListener('mouseover',function(){
        toggleEnabledButton();
    })

let validacionImagen=(image)=>{
    if(image.files.length>0){
        $(`form_register_asterisco_image`).innerText=' ✓';
        $(`form_register_asterisco_image`).style.color='#39b54a';
        $(`form_register_asterisco_image`).style.fontWeight='bold';
        $('form_image').style.border='2px solid #39b54a'
        $(`image_error`).hidden=true;
        return true;
    }else{
        $(`form_register_asterisco_image`).innerText=' *';
        $(`form_register_asterisco_image`).style.color='red';
        $(`form_register_asterisco_image`).style.fontWeight='bold';
        $('form_image').style.border='2px solid red'
        $(`form_register_asterisco_image`).hidden=false;
        return false;
    }
}
    $('form_image').addEventListener('blur',function(){
        validacionImagen(this);
        toggleEnabledButton();
    })