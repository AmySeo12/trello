window.addEventListener("load", function(){
	var lista = document.getElementById("lista");
    var formulario = document.getElementById("formulario");
    var button = document.getElementById("boton");
	var div = document.getElementById("div");
    div.addEventListener("click", function() {
    	agregar(formulario, div);
    });

    button.addEventListener("click", function(e){
    	e.preventDefault();
    	var texto = "Añadir una tarjeta...";
    	lista.classList.add("none");
    	crear("div", lista.value,formulario, "negrita");
    	crear("div", texto, formulario, "grey");
    	agregar(button, close);
    });

    var close = document.getElementById("close");
    close.addEventListener("click", function(e) {
    	e.preventDefault();
    	agregar(formulario, div);
    });

    function crear(div, contenido,padre, clase1){
    	var titulo = document.createElement(div);
    	titulo.textContent = contenido;
    	titulo.classList.add("padding");
    	titulo.classList.add(clase1);
    	padre.appendChild(titulo)
    }

    function agregar(formulario, div){
    	formulario.classList.toggle("none");
    	div.classList.toggle("none");
    }
})