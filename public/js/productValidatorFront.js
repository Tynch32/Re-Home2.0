let $ = id => document.getElementById(id)

let validacionCorrecta=(campo)=>{
    $(`form_product_asterisco_${campo.id}`).innerText=' ✓';
    $(`form_product_asterisco_${campo.id}`).style.color='#39b54a';
    $(`form_product_asterisco_${campo.id}`).style.fontWeight='bold';
    $(campo.id).style.border='2px solid #39b54a'
}
let validacionIncorrecta=(campo)=>{
    $(`form_product_asterisco_${campo.id}`).innerText=' *';
    $(`form_product_asterisco_${campo.id}`).style.color='red';
    $(`form_product_asterisco_${campo.id}`).style.fontWeight='bold';
    $(campo.id).style.border='2px solid red'
    $(`form_product_asterisco_${campo.id}`).hidden=false;
}
let validarCampo=(campo,nombre,rangoMin,rangoMax)=>{
    $(`${campo.id}_error`).hidden=true;
        if($(campo.id).value.trim().length<rangoMin){
            if($(campo.id).value.trim().length<rangoMin){
                $(`product_form_${campo.id}`).innerText = `* El ${nombre} debe tener min. ${rangoMin} caracteres`
                $(`product_form_${campo.id}`).hidden = false;
                validacionIncorrecta(campo)
            }else{
                $(`product_form_${campo.id}`).innerText = `* El ${nombre} es obligatorio`
                $(`product_form_${campo.id}`).hidden = false;
                validacionIncorrecta(campo)
            }
        }else{
            if($(campo.id).value.trim().length>rangoMax){
                $(`product_form_${campo.id}`).innerText = `* El ${nombre} debe tener max. ${rangoMax} caracteres`
                $(`product_form_${campo.id}`).hidden = false;
                validacionIncorrecta(campo)
            }else{
                $(`product_form_${campo.id}`).hidden = true;
                validacionCorrecta(campo)
            }
        }
}
let validarPrecio=()=>{
    $(`price_error`).hidden=true;
    if(!(/^\d+$/.test($('price').value))){
        $(`product_form_price`).innerText = `* El precio solo debe tener números`
        $(`product_form_price`).hidden = false;
        validacionIncorrecta($(`price`))
    }else{
        if(($('price').value)<=0){
            $(`product_form_price`).innerText = `* El precio debe ser mayor a 0`
            $(`product_form_price`).hidden = false;
            validacionIncorrecta($(`price`))
        }else{
            $(`product_form_price`).hidden = true;
            validacionCorrecta($(`price`))
        }
    }
}
let validarDescuento=()=>{
    if($('discount').value!=""){
        if(!(/^\d+$/.test($('discount').value))){
            $(`product_form_discount`).innerText = `* El descuento solo debe tener números`
            $(`product_form_discount`).hidden = false;
            validacionIncorrecta($(`discount`))
        }else{
            if(($('discount').value)<0){
                $(`product_form_discount`).innerText = `* El descuento debe ser mayor o igual a 0`
                $(`product_form_discount`).hidden = false;
                validacionIncorrecta($(`discount`))
            }else{
                if(($('discount').value)>=100){
                    $(`product_form_discount`).innerText = `* El descuento debe ser menor a 100`
                    $(`product_form_discount`).hidden = false;
                validacionIncorrecta($(`discount`))
                }else{
                    $(`product_form_discount`).hidden = true;
                    validacionCorrecta($(`discount`))
                }
            }
        }
    }else{
        $(`product_form_discount`).hidden = true;
        validacionCorrecta($(`discount`))
    }
}
    $('name').addEventListener('blur',function(){
        validarCampo(this,'nombre',5,20);
    })
    $('name').addEventListener('keyup',function(){
        validarCampo(this,'nombre',5,20);
    })
    $('description').addEventListener('blur',function(){
        validarCampo(this,'descripcion',20,500);
    })
    $('description').addEventListener('keyup',function(){
        validarCampo(this,'descripcion',20,500);
    })
    $('price').addEventListener('blur',function(){
        validarPrecio()
    })
    $('price').addEventListener('keyup',function(){
        validarPrecio()
    })
    $('discount').addEventListener('blur',function(){
        validarDescuento()
    })
    $('discount').addEventListener('keyup',function(){
        validarDescuento()
    })
    $('category').addEventListener('change',function(){
        $(`category_error`).hidden=true;
        validacionCorrecta($(`category`))
    })

let validacionImagen=(image)=>{
    if(image.files.length>0 && validarFormatoImagen(image.files[0].name)){
        $(`form_product_asterisco_image`).innerText=' ✓';
        $(`form_product_asterisco_image`).style.color='#39b54a';
        $(`form_product_asterisco_image`).style.fontWeight='bold';
        $('form_image').style.border='2px solid #39b54a';
        $(`product_form_image`).hidden=true;
        $(`image_error`).hidden=true;
        return true;
    }else{
        $(`form_product_asterisco_image`).innerText=' *';
        $(`form_product_asterisco_image`).style.color='red';
        $(`form_product_asterisco_image`).style.fontWeight='bold';
        $('form_image').style.border='2px solid red'
        $(`form_product_asterisco_image`).hidden=false;
        $(`product_form_image`).hidden=false;
        return false;
    }
}
let validarFormatoImagen=(archivo)=>{
    let inputArchivo = archivo;
    let extension = inputArchivo.split('.').pop().toLowerCase();
    let extensionesValidas = ['jpg','jpeg','png','gif','webp'];
    return extensionesValidas.includes(extension);
}

let validacionImagenes=(image)=>{
    let todasLasImagenesSonValidas = true;
    console.log(image.files);

    for (let i = 0; i < image.files.length; i++) {
        todasLasImagenesSonValidas=todasLasImagenesSonValidas&&validarFormatoImagen(image.files[i].name)
    }

    if(todasLasImagenesSonValidas){
        $('form_images').style.border='2px solid #39b54a'
        $(`product_form_images`).hidden=true;
        return true;
    }else{
        $('form_images').style.border='2px solid red'
        $(`product_form_images`).hidden=false;
        return false;
    }
}
    if($('form_image')){
        $('form_image').addEventListener('blur',function(){
            validacionImagen(this);
        })
    }

    $('form_images').addEventListener('blur',function(){
        validacionImagenes(this);
    })

    