window.addEventListener("load", function(){
	var padre = document.getElementById("padre")
	var lista = document.getElementById("lista");
    var formulario = document.getElementById("formulario");
    var button = document.getElementById("boton");
	var div = document.getElementById("div");
    div.addEventListener("click", function() {
    	agregar(formulario, div);
    });

    button.addEventListener("click", function(e){
    	e.preventDefault();
    	var texto = "<a>Añadir una tarjeta...</>";
    	formulario.classList.toggle("none");

    	var contenedor = document.createElement("div");
    	contenedor.classList.add("formulario");
    	contenedor.classList.add("width");
    	contenedor.classList.add("inline-block");
    	padre.appendChild(contenedor);

    	crear("div", lista.value, contenedor, "negrita");
    	crear("div", texto, contenedor, "grey");
    	agregarNuevaLista(padre);
    	contador ++;
    });

    var close = document.getElementById("close");
    close.addEventListener("click", function(e) {
    	e.preventDefault();
    	agregar(formulario, div);
    });

    function agregarNuevaLista(padre){
    	var div= document.createElement("div");
    	div.innerHTML="Añadir una lista..."
    	div.classList.add("lista");
    	padre.appendChild(div);
    }

    function crear(div, contenido,padre, clase1){
    	var titulo = document.createElement(div);
    	titulo.innerHTML = contenido;
    	titulo.classList.add("padding");
    	titulo.classList.add(clase1);
    	padre.appendChild(titulo)
    }

    function agregar(formulario, div){
    	formulario.classList.toggle("none");
    	div.classList.toggle("none");
    }

});