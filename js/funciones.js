let parrafo = document.querySelector('.parrafo1');
p2 = document.querySelector('.parrafo2').classList[1];

// invertir flecha

function invertir(e , f) {
    
    let flecha = document.querySelector(`.flecha${e}`);
    flecha = flecha.classList.toggle('flecha--invertida');
   /*  cerrar(); */

// H2 cambiarlo a bold
    if (flecha == true){
        let negrita1 = document.querySelector(`.titulo${e}`).style.fontWeight="700"; 
        parrafo = document.querySelector(`.parrafo${e}`);
        parrafo.classList.remove('noMostrar');// Mostrar un parrafo
        
    }
    else{
        let negrita1 = document.querySelector(`.titulo${e}`).style.fontWeight="";
        parrafo.classList.add('noMostrar');//Borrar Parrafo
    } 
} 



// Que se vea uno a la vez

//Que quede uno desde el principio

function cerrar(){
    if(p2 == "" ){
        p = document.querySelector('.parrafo2').classList.add('noMostrar');
        titulo = document.querySelector('.titulo2').classList.remove('bold');
        document.querySelector('.flecha2').classList.remove('flecha--invertida');   
    }
    
    
    
}