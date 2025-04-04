let title_h1 = document.getElementById("h1-header");
let title_h2 = document.getElementById("h2-header");
let title_p = document.getElementById("p-header");

let text_h1= "Desarollo y programación";
let text_h2= "Innovación y tecnologia";
let text_p= "Desarrollamos los mejores productos, innovamos en el mercado";


function escribe(elemento,texto,velocidad){



    for(let i=0; i< texto.length;i++ ){

        setTimeout(() => {

            elemento.innerHTML+= texto.charAt(i);

        },i* velocidad);

        

    }
}


setTimeout(() => {

    escribe(title_h1,text_h1,50);
    escribe(title_h2,text_h2,50);
    escribe(title_p,text_p,30);
    
}, 0);