function crearLista(event) {
	var nombreTarjeta = document.getElementById('nombreTarjeta').value;
	event.preventDefault();
	/////////crear elementos////
	var contenedor = document.getElementById('contenedor');
	var seccion = document.createElement('section');
	var formulario = document.createElement('form');
	var h3 = document.createElement('h3');
	var cajaPendientes = document.createElement('input');
	var botonPendientes = document.createElement('button');
	var borrarLista = document.createElement('button');
	///////////propiedades de los elementos ////
	cajaPendientes.type = "text";
	botonPendientes.type = "submit";
	botonPendientes.className = "btn btn-success";
	borrarLista.innerHTML = "Eliminar Lista";
	borrarLista.type = "button";
	borrarLista.className = "btn btn-danger";
	botonPendientes.className = "btn btn-success";
	botonPendientes.onclick = agregarPendientes;
	botonPendientes.innerHTML = "Agregar Pendientes";
	///les asignamos lo que van a atener///
	h3.innerHTML = nombreTarjeta;
	borrarLista.onclick = borrarListas;
	///asignamos como querremos que vaya, de izquierda a derecha 
	formulario.appendChild(cajaPendientes);
	formulario.appendChild(botonPendientes);
	seccion.appendChild(h3);
	seccion.appendChild(borrarLista);
	seccion.appendChild(formulario);
	contenedor.appendChild(seccion);

}

function borrarListas(){
	this.parentElement.remove();
}


function agregarPendientes(event){
	event.preventDefault();	
	//es this hace referencia al boton  y  el de a lado es el input 
	var obtenerPendiente = this.previousSibling.value;																																				
	////crear elementos
	var articulo = document.createElement('article');
	var pendientes = document.createElement('p');
	var botonEliminar = document.createElement('button');
	var botonEditar = document.createElement('button');
	///agregar propiedades a los elemntos
	botonEliminar.type = "button";
	botonEliminar.className = "btn btn-danger";
	botonEliminar.innerHTML = "X"
	botonEditar.type = "button";
	botonEditar.className = "btn btn-info";
	botonEditar.innerHTML = "Editar";


	//7agregar las funciones
	botonEliminar.onclick = eliminarPendiente;
	botonEditar.onclick = editarPendiente;
	pendientes.innerHTML = obtenerPendiente;
	

	//agregar a la section 
	articulo.appendChild(pendientes);
	articulo.appendChild(botonEditar);
	articulo.appendChild(botonEliminar);
	var estarSeccion = this.parentElement.parentElement;
	estarSeccion.appendChild(articulo);

}

function eliminarPendiente(){
	//this es el elemento que le asignes
	this.parentElement.remove();

}

function editarPendiente(){
	 var editarTexto = prompt("ingresa tu texto");
	 this.previousSibling.innerHTML = editarTexto;

}