let $ = id => document.getElementById(id)
let validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
    }else{
        $('button_login_ingresar').disabled=true;
    }
}

let validacionEmail = (email) =>{
    if(!validarEmail.test(email.value)){
        if(!email.value.trim()){
            $('login_form_email').innerText="* El email es obligatorio";
            $('login_form_email_error').hidden=true;
            $('login_form_email').hidden = false
        }else{
            $('login_form_email').innerText="* Formato de email invalido";
            $('login_form_email').hidden = false
        }
    }else{
        $('login_form_email').hidden = true
    }
}
    $('email').addEventListener('blur',function(){
        validacionEmail(this);
    })
    $('email').addEventListener('keyup',function(){
        validacionEmail(this);
    })

    $('password').addEventListener('blur',function(){
        if(!this.value.trim()){
            $('login_form_password').hidden = false
            $('login_form_password_error').hidden=true;
        }else{
            $('login_form_password').hidden = true
        }
    })
    $('email').addEventListener('keyup',function(){
        toggleEnabledButton();
    })
    $('password').addEventListener('keyup',function(){
        $('login_form_password_error').hidden=true;
        toggleEnabledButton();
    })
    $('formulario_login').addEventListener('mouseover',function(){
        toggleEnabledButton();
    })

