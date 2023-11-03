//nombre contraseña email e imagen

let $ = id => document.getElementById(id)
let validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

$('email').addEventListener('blur',function(){
    if(!validarEmail.test(this.value)){
        if(!this.value.trim()){
            $('register_form_email').innerText="* El email es obligatorio";
            $('register_form_email').hidden = false
        }else{
            $('register_form_email').innerText="* No es un email valido";
            $('register_form_email').hidden = false
        }
    }else{
        $('register_form_email').hidden = true
    }
})

$('name').addEventListener('blur',function(){
    if(!this.value.trim()){
        $('register_form_name').hidden = false
    }else{
        $('register_form_name').hidden = true
    }
})
$('surname').addEventListener('blur',function(){
    if(!this.value.trim()){
        $('register_form_surname').hidden = false
    }else{
        $('register_form_surname').hidden = true
    }
})
$('password').addEventListener('blur',function(){
    if(!this.value.trim()){
        $('register_form_password').hidden = false
    }else{
        $('register_form_password').hidden = true
    }
})
$('password2').addEventListener('blur',function(){
    if(!this.value.trim()){
        $('register_form_password2').hidden = false
    }else{
        $('register_form_password2').hidden = true
    }
})
