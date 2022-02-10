
let ultimoParrafo = document.querySelector('.parrafo2');
let ultimoFlecha = document.querySelector('.flecha2');
let ultimoTitulo = document.querySelector('.titulo2');


// invertir flecha

function invertir(e){
    let parrafo = document.querySelector(`.parrafo${e}`);
    let flecha = document.querySelector(`.flecha${e}`);
    let titulo = document.querySelector(`.titulo${e}`);

    if(ultimoParrafo != parrafo) {

        //Abrir/Cerrar Bloque

        parrafo.classList.remove('noMostrar');
        flecha.classList.add('flecha--invertida');
        titulo.style.fontWeight="700";

        //Cierro el anterior
        if(ultimoParrafo) {
            ultimoParrafo.classList.add('noMostrar');
            ultimoFlecha.classList.remove('flecha--invertida');
            ultimoTitulo.style.fontWeight="";

            ultimoParrafo = parrafo;
            ultimoFlecha = flecha;
            ultimoTitulo = titulo;
        }
    }


}



// Que se vea uno a la vez


