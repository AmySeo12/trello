window.addEventListener("load", function(){
	var lista = document.getElementById("lista");
    var formulario = document.getElementById("formulario");
    var button = document.getElementById("boton");
	var div = document.getElementById("div");
    div.addEventListener("click", function() {
    	agregar(formulario, div);
    });

    /*button.addEventListener("click", function(e){
    	e.preventDefault();
    	lista.classList.add("none");
    	var titulo = document.createElement("div");
    	titulo.textContent = lista.value;
    	var tarjeta = document.createElement("div");
    	tarjeta.textContent="Añadir una tarjeta";
    	formulario.appendChild(titulo);
    	formulario.appendChild(tarjeta);
    	agregar(button, close);
    });*/

    var close = document.getElementById("close");
    close.addEventListener("click", function(e) {
    	e.preventDefault();
    	agregar(formulario, div);
    });

    function agregar(formulario, div){
    	formulario.classList.toggle("none");
    	div.classList.toggle("none");
    }
})