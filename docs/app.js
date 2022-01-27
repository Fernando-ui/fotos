
const tarjetas = $('.tarjetas');
let arr = [];
const arrCanciones = [
    'https://www.youtube.com/watch?v=Xo6EaPLG1Ds',
    'https://www.youtube.com/watch?v=FjAe4BTegho',
    'https://www.youtube.com/watch?v=BWJ-5gycaA0',
    'https://www.youtube.com/watch?v=lp-EO5I60KA',
    'https://www.youtube.com/watch?v=rcRX1ma5Zh4',
    'https://www.youtube.com/watch?v=FnwXVRcYUh0',
    'https://www.youtube.com/watch?v=-9j56z2BEKU',
    'https://www.youtube.com/watch?v=6r8mlDvfyZI',
    'https://www.youtube.com/watch?v=msMC7vvra_E',
    'https://www.youtube.com/watch?v=rSqIV5CWXtI',
    'https://www.youtube.com/watch?v=dVogyNCMTR0',
    'https://www.youtube.com/watch?v=we3lvOaR0qI',
    'https://www.youtube.com/watch?v=_xbvMm0wBNM',
    'https://www.youtube.com/watch?v=5oMQ8pCg5nc',
    'https://www.youtube.com/watch?v=Kpy48LohhNc',
    'https://www.youtube.com/watch?v=abK-R075fPs',
    'https://www.youtube.com/watch?v=_OCY14wZXEs',
    'https://www.youtube.com/watch?v=e5u9Gk4Rm1Q',
    'https://www.youtube.com/watch?v=p1JmzB6E-C8',
    'https://www.youtube.com/watch?v=FmSBlyCQDpE',
    'https://www.youtube.com/watch?v=Ma_qoyamht8',
    'https://www.youtube.com/watch?v=jjSVZWvBBVU',
    'https://www.youtube.com/watch?v=Lj6yVr3oWjQ',
    'https://www.youtube.com/watch?v=4BP9LrLaBNw',
    'https://www.youtube.com/watch?v=wkx_AaMhkCg',
    'https://www.youtube.com/watch?v=jGVM3JdzL4Y',
    
];
const arrFrases = [
    'Eres el amor de mi vida',
    'Eres lo mejor que me pudo haber pasado',
    'Me haces sentir como en mi hogar',
    'Amo la persona tan maravillosa que eres',
    'Mi vida Te amo y no es para tanto, es para siempre',
    'La sonrisa es mia pero el motivo eres tu',
    'Fuiste, eres, y siempre serás mi mas bonita casualidad',
    'Eres exactamente eso que no quiero nunca perder',
    'Juntos es mi sitio favorito',
    'Dos vidas, un mundo.',
    'No sé hacia dónde vamos, lo que sé es que quiero ir contigo',
    'Me basta mirarte para saber que contigo me voy a empapar el alma',
    'Desde el primer momento en que te vi, supe que te quería a mi lado para siempre',
    'Tu amor me inspira, tu ternura me conmueve y tus besos me enloquecen',
    'Tengo hambre de tus besos',
    'Eres mi momento favorito del día',
    ' Y pensar que todo comenzó con un simple mensaje',
    'Hazme tu sol. Y brillaré para ti. Hazme tus pasos. Y cuidaré de ti',
    'Gracias por creer en mi y en nosotros',
    

];
for( let i =0; i <= 70; i++ ) {
    
    let random = Math.abs(Math.round((Math.random() * 3) + 1));
    let randomImagen = Math.abs(Math.round(Math.random() * 54));
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
    