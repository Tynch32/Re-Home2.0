let $ = id => document.getElementById(id)

let inicioX = 0;
let actualX = 0;
let idLength = $('images-length').innerText;
let idActual = 0;


$('main-image').addEventListener('touchstart', function (evento) {
        inicioX = evento.touches[0].clientX;

});
$('main-image').addEventListener('touchmove', function (evento) {
        actualX = evento.touches[0].clientX;
        var distancia = actualX - inicioX;
        if (distancia < -70) {
                if (idActual <= 0) {
                        idActual = idLength;
                } else {
                        idActual -= 1;
                }
        }
        if (distancia > 70) {
                if (idActual == idLength) {
                        idActual = 0;
                } else {
                        idActual += 1;
                }
        }
        idActual = Math.round(idActual);
        $('actualValue').innerText = idActual;
});

