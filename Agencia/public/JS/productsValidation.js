// window.onload = function () {
console.log('Conexion validacion productos');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	let errores = [];

	let nombrePaquete = document.querySelector('#nombrePaquete');
	let descripcion = document.querySelector('#descripcion');
	//let imagen = document.querySelector('#image');

	// Validación
	if (nombrePaquete.value == '') {
		errores.push('Debe de ingresar un nombre');
		nombrePaquete.classList.add('is-invalid');
	} else if (nombrePaquete.value.length < 2) {
		errores.push('El nombre debe tener mínimo dos caracteres');
		nombrePaquete.classList.add('is-invalid');
	} else {
		nombrePaquete.classList.add('is-valid');
		nombrePaquete.classList.remove('is-invalid');
		form.descripcion.focus();
	}

	if (descripcion.value == '') {
		errores.push('Debe de ingresar una descripción');
		descripcion.classList.add('is-invalid');
	} else if (descripcion.value.length < 20) {
		errores.push('La descripción debe tener mínimo veinte caracteres');
		descripcion.classList.add('is-invalid');
	} else {
		descripcion.classList.add('is-valid');
		descripcion.classList.remove('is-invalid');
	}

	if (errores.length > 0) {
		e.preventDefault();
		let ulErrors = document.querySelector('.errores');
		ulErrors.classList.add('alert-warning');
		ulErrors.innerHTML = '';
		for (let i = 0; i < errores.length; i++) {
			ulErrors.innerHTML += `<li >  ${errores[i]} </li>`;
		}
	} else {
		// alert('La validación fué exitosa')
		form.submit();
	}
});
// };
