let $ = id => document.getElementById(id)
let validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let validacionCorrecta=(campo)=>{
    $(campo.id).style.border='2px solid #39b54a'
}
let validacionIncorrecta=(campo)=>{
    $(campo.id).style.border='2px solid red'
}

let estanCompletosLosCampos= () =>{
    if(validarEmail.test($('email').value)&&($('password').value)){
        return true;
    }else{
        return false;
    }
}

let toggleEnabledButton = () => {
    if(estanCompletosLosCampos()){
        $('button_login_ingresar').disabled=false;
        $('button_login_ingresar').style.background='linear-gradient(to top, rgb(143, 94, 37) 0%, rgb(198, 192, 126) 50%, rgb(143, 94, 37) 100%)';
        $('button_login_ingresar').style.border='gold';
    }else{
        $('button_login_ingresar').disabled=true;
        $('button_login_ingresar').style.background='#212529';
        $('button_login_ingresar').style.border='1px solid #212529';
    }
}

let validacionEmail = (email) =>{
    if(!validarEmail.test(email.value)){
        if(!email.value.trim()){
            $('login_form_email').innerText="* El email es obligatorio";
            $('login_form_email_error').hidden=true;
            $('login_form_email').hidden = false
            validacionIncorrecta(email)
        }else{
            $('login_form_email').innerText="* Formato de email invalido";
            $('login_form_email').hidden = false
            validacionIncorrecta(email)
        }
    }else{
        $('login_form_email').hidden = true
        validacionCorrecta(email)
    }
}
let validacionContraseña = (email) => {
    if(!email.value.trim()){
        $('login_form_password').hidden = false
        $('login_form_password_error').hidden=true;
        validacionIncorrecta(email)
    }else{
        $('login_form_password').hidden = true
        validacionCorrecta(email)
    }
}

    $('email').addEventListener('blur',function(){
        validacionEmail(this);
    })
    $('email').addEventListener('keyup',function(){
        validacionEmail(this);
        toggleEnabledButton();
    })

    $('password').addEventListener('blur',function(){
        validacionContraseña(this)
    })
    $('password').addEventListener('keyup',function(){
        validacionContraseña(this)

    })
    $('formulario_login').addEventListener('mouseover',function(){
        toggleEnabledButton();
    })

