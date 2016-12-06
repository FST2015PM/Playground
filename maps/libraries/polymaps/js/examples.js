$(document).ready(function() {
	//Creando el objeto mapa
	var po = org.polymaps;
	var map = po.map()
	//seleccionando contenedor
	var div = document.getElementById("example1");
	
	//Dibujando mapa interactivo, con controles para moverse y sum
	map.container(div.appendChild(po.svg("svg")))
	.add(po.image().url('../libraries/polymaps/img/mapaAfrica.svg'))
    .add(po.interact())
    .add(po.hash())
    .add(po.compass())
    ;
});