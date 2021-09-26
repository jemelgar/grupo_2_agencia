window.onload = function () {
	console.log('Conexión vista newProduct');
	let form = document.querySelector('form');

	form.addEventListener('submit', (e) => {
		let errores = [];
		let nombre = document.querySelector('#nombre');
		let precio = document.querySelector('#precio');
		let fecha = document.querySelector('#fecha');
		let descripcion = document.querySelector('#descripcion');
		let imagen = document.querySelector('#imagen');

		if (nombre.value == '') {
			errores.push('Ingrese nombre');
			nombre.classList.add('is-invalid');
		} else if (nombre.value.length < 2) {
			errores.push('El nombre debe tener mínimo dos caracteres');
			nombre.classList.add('is-invalid');
		} else {
			nombre.classList.add('is-valid');
			nombre.classList.remove('is-invalid');
			form.precio.focus();
		}

		if (precio.value == '') {
			errores.push('Ingrese el precio');
			precio.classList.add('is-invalid');
		} else if (precio.value == 0) {
			errores.push('El precio debe de ser mayor a 0');
			precio.classList.add('is-invalid');
		} else {
			precio.classList.add('is-valid');
			precio.classList.remove('is-invalid');
			form.fecha.focus();
		}

		if (fecha.value == '') {
			errores.push('Ingrese la fecha');
			fecha.classList.add('is-invalid');
		} else {
			fecha.classList.add('is-valid');
			fecha.classList.remove('is-invalid');
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

		imagen.addEventListener('change', validandoImagen);

		function validandoImagen() {
			const formatos = ['jpg', 'jpeg', 'png', 'gif'];
			const { name: fileName } = this.files[0];
			const fileExtension = fileName.split('.').pop();

			if (!formatos.includes(fileExtension)) {
				alert('Formato de imagen no válido');

				this.value = null;
			} else {
				imagen.classList.add('is-valid');
				imagen.classList.remove('is-invalid');
			}
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
};
