window.addEventListener("load", function(){
	var contenedorPadre= document.getElementById("contenedorPadre");
	var padre = document.getElementById("padre");
	var lista = document.getElementById("lista");
    var formulario = document.getElementById("formulario");
    var button = document.getElementById("boton");
	var div = document.getElementById("div");
    var contador= 1;
    div.addEventListener("click", function() {
    	agregar(formulario, div);
    	lista.focus();

    });

    button.addEventListener("click", function(e){
    	e.preventDefault();
    	var texto = "<a>Añadir una tarjeta...</a>";
    	var conedorHermano = document.createElement("div");
    	conedorHermano.classList.add("padre");

    	var padreTemporal = formulario.parentNode;

    	contenedorPadre.appendChild(conedorHermano);
    	conedorHermano.appendChild(formulario);
    	conedorHermano.appendChild(div);

    	padreTemporal.remove();

    	var contenedor = document.createElement("div");
    	contenedor.classList.add("formulario");
    	contenedor.classList.add("width");
    	contenedor.classList.add("inline-block");
    	contenedorPadre.insertBefore(contenedor, contenedorPadre.lastElementChild);

        /*contenedor.addEventListener("dragenter", function(){
            this.classList.add("auto");
        });
        contenedor.addEventListener("dragover", function(e){
            this.classList.remove("auto");
            e.preventDefault();
        });
        contenedor.addEventListener("drop", function(e){
            this.classList.remove("auto");
            var contenedorMensaje= e.dataTransfer.getData("text");
            var element= document.getElementById(contenedorMensaje);
            this.insertBefore(element, this.firstElementChild.nextElementSibling);
        }, true);*/
    	
    	agregar(formulario, div);

    	crear("div", lista.value, contenedor, "negrita");
    	crear("div", texto, contenedor, "grey");

    	var select = document.querySelectorAll(".grey");
		select[select.length-1].addEventListener("click", function(){
			this.classList.add("none");
			crearFormulario("form", contenedor, "formulario", this);
		});

    	lista.value="";
    });

    var close = document.getElementById("close");
    close.addEventListener("click", function(e) {
    	e.preventDefault();
    	agregar(formulario, div);
    });

    function crearFormulario(formulario, padre, clase1, select){
    	var formula = document.createElement(formulario);
    	formula.classList.add(clase1);
    	padre.appendChild(formula);

    	crear("textarea", "", formula, "textArea");
    	crear("button", "Guardar", formula, "button");


        formula.lastElementChild.addEventListener("click", function(e){
            
    		e.preventDefault();
    		select.classList.remove("none");

    		var mensajes = document.createElement("div");
            mensajes.id= "mensaje" + contador;
            mensajes.draggable= true;
			mensajes.innerHTML=formula.firstElementChild.value;
    		formula.classList.add("none");
    		mensajes.classList.add("mensajes");
			padre.insertBefore(mensajes, select);
            contador++;

            mensajes.addEventListener("dragstart", function(e){
                e.dataTransfer.setData("text", this.id);
                this.classList.add("dragstar");
            });
            mensajes.addEventListener("dragenter", function(){
                //this.classList.add("dragenter");
            });
            mensajes.addEventListener("dragleave", function(){
                //this.classList.remove("dragenter")
            });
            mensajes.addEventListener("dragover", function(e){
                e.preventDefault();
            });
            mensajes.addEventListener("drop", function(e){
                //this.classList.add("animated", "rubberBand", "big");
                //this.classList.remove("dragenter");
                var contenedorMensaje= e.dataTransfer.getData("text");
                var element= document.getElementById(contenedorMensaje);
                this.parentElement.insertBefore(element, this.nextElementSibling);
            }, true);
            mensajes.addEventListener("dragend", function(){
                this.classList.remove("dragstar");           
            });

        });
    }

    function crear(div, contenido,padre, clase1){
    	var titulo = document.createElement(div);
    	titulo.innerHTML = contenido;
    	titulo.classList.add("padding");
    	titulo.classList.add(clase1);
    	padre.appendChild(titulo);
    }

    function agregar(formulario, div){
    	formulario.classList.toggle("none");
    	div.classList.toggle("none");
    }

});