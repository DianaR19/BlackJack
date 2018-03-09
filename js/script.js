var cartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var tipos = ["corazon","rombo","trebol","espada"];
var aux = [];
var contBar = 0;

$(document).on('click','#iniciar', function (event) {
    for(var i=0; i<4; i++){
        do{
            var x = Math.floor((Math.random() * 4 )); //tipos.length
            var y = Math.floor((Math.random() * 13)); //cartas.length
            var nuevo = tipos[x] + "-" + cartas[y];
            
        }while(aux.indexOf(nuevo)!=-1);

        aux.push(nuevo);
        
        //$("#carCasa1").attr("src","imgs/Cards/"+ aux[0] +".png");
        $("#carCasa1").attr("src","imgs/Cards/0.jpg");
        $("#carCasa2").attr("src","imgs/Cards/"+ aux[1] +".png");
        $("#carJugador1").attr("src","imgs/Cards/"+ aux[2] +".png");
        $("#carJugador2").attr("src","imgs/Cards/"+ aux[3] +".png");

        $("#iniciar").hide();  
        $("#hit").show();  
        $("#stand").show();  
    }

});
$(document).on('click','#hit', function (event) {
    if(contBar<52){    
        do{
            var x = Math.floor((Math.random() * 4 )); //tipos.length
            var y = Math.floor((Math.random() * 13)); //cartas.length

            var nuevo = tipos[x] + "-" + cartas[y];
            
        }while(aux.indexOf(nuevo)!=-1);

        $(".cartasJugador").append("<img id='carCasa1' src='imgs/Cards/"+nuevo+".png' width='100' height='150'>");

        aux.push(nuevo);

        contBar++;
    }else{
        console.log("ya no hay barajas");
    }
});
$(document).on('click','#stand', function (event) {
    $("#stand").hide();  
    $("#hit").hide();  
    var numBar = contBar+4;
    
    var puntosJugador = 0;

    for(var i=2; i<numBar; i++){

        var cadena = aux[i].split("-");
        
        if(cadena[1]=="A" || cadena[1]=="J" || cadena[1]=="Q" || cadena[1]=="K"){
            puntosJugador += 10;
        }else{
            puntosJugador += cartas.indexOf(cadena[1]) + 1;
        }
    }

    console.log("-------pts JUGADOR----------");
    console.log(puntosJugador);

    if(puntosJugador > 21){
        console.log("GANA LA CASA"); 
        restartGame();
        
        
    }else{
        console.log("TURNO DE LA CASA");  
        
        var puntosCasa = 0;
              
        for(var i=0; i<2; i++){

            var cadena = aux[i].split("-");
            
            if(cadena[1]=="A" || cadena[1]=="J" || cadena[1]=="Q" || cadena[1]=="K"){
                puntosCasa += 10;
            }else{
                puntosCasa += cartas.indexOf(cadena[1]) + 1;
            }
        }

        if(puntosCasa <15){
            
        }

        console.log("-------pts CASA----------");
        console.log(puntosCasa);
    }

});

function restartGame(){		

        $("#restart").show();

    $(document).on('click','#restart', function (event) {
        $("#restart").hide();  
               
        $(".cartasCasa").html("<img id='carCasa1' src='imgs/Cards/fondo.png' width='100' height='150'><img id='carCasa2' src='imgs/Cards/fondo.png' width='100' height='150'>");		
        $(".cartasJugador").html("<img id='carJugador1' src='imgs/Cards/fondo.png' width='100' height='150'><img id='carJugador2' src='imgs/Cards/fondo.png' width='100' height='150'>");

        $(".ButtonsHitStand").html("<input id='hit' type=image src='imgs/Cards/0.jpg' width='100' height='150' style='display:none;'><button id='stand' style='display:none;'>Stand</button>");
    });


}