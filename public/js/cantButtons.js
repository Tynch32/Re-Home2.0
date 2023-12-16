let botonIzq = document.getElementById("cantProduct_button_left");
let botonDer = document.getElementById("cantProduct_button_right");

let valor = document.getElementById("product_detail_cant_products");
let valorActual = parseInt(valor.value);

botonIzq.addEventListener("click",function(event){
    event.preventDefault();
    if(valorActual>1){
        valorActual-=1;
        valor.value=valorActual;
    }
})
botonDer.addEventListener("click",function(event){
    event.preventDefault();
    valorActual+=1;
    valor.value=valorActual;
})





