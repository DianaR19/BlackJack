var cartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var tipos = ["corazon","rombo","trebol","espada"];
var aux = [];
var contBar = 1;

$(document).on('click','.jugar', function (event) {
    var x = Math.floor((Math.random() * 3 )); //tipos.length
    var y = Math.floor((Math.random() * 12)); //cartas.length

    var nuevo = tipos[x] + cartas[y];
    console.log(nuevo);
});
$(document).on('click','.repartir', function (event) {
    if(contBar<=52){

    
    do{
        var x = Math.floor((Math.random() * 4 )); //tipos.length
        var y = Math.floor((Math.random() * 13)); //cartas.length

        var nuevo = tipos[x] + cartas[y];
        //console.log(nuevo);
        //console.log(aux.indexOf(nuevo));
        //console.log("--------------------------------");
    }while(aux.indexOf(nuevo)!=-1);
    $("#carJugador1").attr("src","imgs/Cards/"+ nuevo +".png");
    console.log(nuevo);
    console.log(contBar);
    console.log("--------------------------------");
    aux.push(nuevo);

    contBar++;
    }else{
        //$("#fin").attr("src","imgs/s.jpg");
        //$("#fin").attr("src","imgs/Cards/"+ nuevo +".jpg");
        console.log("FINAL");
    }
    //console.log(aux);
});
/*$(document).on('click','.active', function (event) {
    var opcion = $(this);
    var type = opcion.data('type');
    var content = opcion.data('content');

    if(type == 1){
        $("#Trailer").attr("src","videos/losincreibles2.mp4");
        $("#Trailer").attr("poster","imgs/li2.jpg");
    }else{
        if(type == 2){
            $("#Trailer").attr("src","videos/PanteraNegra.mp4");
            $("#Trailer").attr("poster","imgs/bp.jpg");
        }else{
            if(type == 3){
                $("#Trailer").attr("src","videos/LaBodaDeValentina.mp4");
                $("#Trailer").attr("poster","imgs/lbdv.jpg");
            }else{
                $("#Trailer").attr("src",content);
                $("#Trailer").attr("poster","imgs/new.png");
            }
        }
    }
});
 
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function handleFiles(files) {
    var file = files[0];
    //console.log(file);
    var reader = new FileReader();
    
    
    $("#playlist").append("<li role='presentation'>"+
        "<img id='movie4' src='imgs//new.png' draggable='true' ondragstart='drag(event)'>"+
        "<a class='active' data-type='4' data-content="+"'C://ProjectsUAA//videos//MazeRunner.mp4' "+"href='javascript:void(0)' role='menuitem'> &nbsp;&nbsp;"+file.name+
        "</a></li><br>");


}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if(data == "movie1"){
        $("#Trailer").attr("src","videos/losincreibles2.mp4");
        $("#Trailer").attr("poster","imgs/li2.jpg");
    }else{
        if(data == "movie2"){
            $("#Trailer").attr("src","videos/PanteraNegra.mp4");
            $("#Trailer").attr("poster","imgs/bp.jpg");
        }else{
            if(data == "movie3"){
                $("#Trailer").attr("src","videos/LaBodaDeValentina.mp4");
                $("#Trailer").attr("poster","imgs/lbdv.jpg");
            }else{
                //Cambiar la direccion del video a la seleccionada
                $("#Trailer").attr("src","videos/MazeRunner.mp4");
                $("#Trailer").attr("poster","imgs/new.png");
            }
        }
    }    
 

    
    var files = ev.dataTransfer.files;
    var x = ev.dataTransfer.items;
    //x[0].w
    var count = files.length;

    //var x = window.URL.createObjectURL(files[0]);
    drop_handler(ev);
    if (count > 0)
        handleFiles(files);

    //-------------------------------------------------------------------------------


}
function drop_handler(ev) {
    //console.log("Drop");
    ev.preventDefault();
    var data = event.dataTransfer.items;
    var f = data[0].getAsFile();
    //console.log("... Drop: File "+f.files);

    // If dropped items aren't files, reject them
    var dt = ev.dataTransfer;
    if (dt.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i=0; i < dt.items.length; i++) {
        if (dt.items[i].kind == "file") {
          var f = dt.items[i].getAsFile();
          //console.log(".... file[" + i + "].name = " + f.name);
          //console.log(".... file = " + dt.items[i]);
          //console.log(".... f = " + f);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i=0; i < dt.files.length; i++) {
        //console.log("... file[" + i + "].name = " + dt.files[i].name);
        //console.log("... file ==== " + dt.files);
      }  
    }
  }*/