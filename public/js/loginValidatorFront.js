let $ = id => document.getElementById(id)
let validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    $('email').addEventListener('blur',function(){
        if(!validarEmail.test(this.value)){
            if(!this.value.trim()){
                $('login_form_email').innerText="* El email es obligatorio";
                $('login_form_email_error').hidden=true;
                $('login_form_email').hidden = false
            }else{
                $('login_form_email').innerText="* Formato de email invalido";
                $('login_form_password_error').hidden=true;
                $('login_form_email').hidden = false
            }
        }else{
            $('login_form_email').hidden = true
        }
    }) 

    $('password').addEventListener('blur',function(){
        if(!this.value.trim()){
            $('login_form_password').hidden = false
        }else{
            $('login_form_password').hidden = true
        }
    })