'use strict'

$(document).ready(()=>{

    // selectores id
    $("#rojo").css("background","red");
    $("#amarillo").css("background","yellow");
    $("#verde").css("color","green");

    // selectores class

    $(".perro").css("background","blue").css("color","white");
    let gato = $(".gato");
    gato.css("color","green")
    gato.on("click", () =>{
        console.log(this)
        $(this).css("background","red");
    });

    // selectores de etiquetas

    /*let div = $("div");
    div.click(()=>{
        div.css("background","blue")
    })*/

    // selector de atributos

    $('[title="google"]').css("background","yellow")
    $('[title="facebook"]').css("background","blue").css("color","white")

    //otros
    $("div , a").css("border","solid","black","5px");


    //eventos mouseover y mouseout
    
    let caja = $("#caja");

    /*caja.mouseover(function(){  
        $(this).css("background","red");
    });
    $("#caja").mouseout(function(){
        $(this).css("background","green");
    });*/

    // evento hover funciona igual que las funciones mouseover y mouse out recibiendo dos parametros de funcion

    function cambiaRojo(){  
        $(this).css("background","red");
    }

    function cambiaVerde(){
        $(this).css("background","green");
    }

    caja.hover(cambiaRojo,cambiaVerde);

    // click y dobleclick
    caja.click(function(){
        $(this).css("background","yellow");
    });

    caja.dblclick(function(){
        $(this).css("background","blue");
    });

    //focus y blur

    let nombre = $("#name");

    nombre.focus(function(){    // cuando se esta dentro del objeto
        $(this).css("border","12px solid green")
    });

    nombre.blur(function(){     // cuando se esta fuera del objeto
        $(this).css("border","4px solid blue");
    });

    // mouseDown y mouseUP

    nombre.mousedown(function(){        // cuando se hace click al objeto
        $(this).css("background","yellow")
    });

    nombre.mouseup(function(){          // cuando se suelta el click del objeto     
        $(this).css("background","white")
    });

    
});


