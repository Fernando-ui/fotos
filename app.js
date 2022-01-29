
const tarjetas = $('.tarjetas');
let arr = [];
const arrCanciones = [
    
    
];
const arrFrases = [
    
];
for( let i =0; i <= 70; i++ ) {
    
    let random = Math.abs(Math.round((Math.random() * 3) + 1));
    let randomImagen = Math.abs(Math.round(Math.random() * 55));
    let randomCancion = Math.abs(Math.round(Math.random() * arrCanciones.length -1 ));
    
    let randomFrase = Math.abs(Math.round(Math.random() * arrFrases.length -1 ));
    
    let clase = 'x'+random;
    arr.push(
        `<div class="tarjeta ${clase} contain_imagen">
            <img class="imagen" src="./assets/imagen-${randomImagen}.jpg">
            <div class="card-texto">
                <a href='${arrCanciones[randomCancion]}' target="_blank" class='cancion'>${arrFrases[randomFrase]} &hearts;</a>
            </div>
        </div>`)
}
tarjetas.append(arr.join(''));

tarjetas.masonry({
    itemSelector:'.tarjetas'
})
    