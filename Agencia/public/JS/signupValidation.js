window.onload = function () {
	console.log('Funcionando conexión con vista');
	let form = document.querySelector('form');

	function validateEmail(email) {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	form.addEventListener('submit', (e) => {
		let errores = [];

		let first_name = document.querySelector('#first_name');
		let last_name = document.querySelector('#last_name');
		let email = document.querySelector('#email');
		let password = document.querySelector('#password');
		let image = document.querySelector('#image');

		// Validación
		if (first_name.value == '') {
			errores.push('Debe de ingresar un nombre');
			first_name.classList.add('is-invalid');
		} else if (first_name.value.length < 2) {
			errores.push('El nombre debe tener mínimo dos caracteres');
			first_name.classList.add('is-invalid');
		} else {
			first_name.classList.add('is-valid');
			first_name.classList.remove('is-invalid');
			form.last_name.focus();
		}

		if (last_name.value == '') {
			errores.push('Debe de ingresar un apellido');
			last_name.classList.add('is-invalid');
		} else if (last_name.value.length < 2) {
			errores.push('El apellido debe tener mínimo dos caracteres');
			last_name.classList.add('is-invalid');
		} else {
			last_name.classList.add('is-valid');
			last_name.classList.remove('is-invalid');
			form.email.focus();
		}

		if (email.value == '') {
			errores.push('Debe de ingresar un email');
			email.classList.add('is-invalid');
		} else if (!validateEmail(email.value)) {
			errores.push('Debe ser un email válido');
			email.classList.add('is-invalid');
		} else {
			email.classList.add('is-valid');
			email.classList.remove('is-invalid');
			form.password.focus();
		}

		if (password.value == '') {
			errores.push('Ingrese una contraseña');
			password.classList.add('is-invalid');
		} else if (password.value.length < 8) {
			errores.push('La contraseña debe tener mínimo 8 caracteres');
			password.classList.add('is-invalid');
		}
		// Más validaciones de Contraseña
		// Contener al menos un dígito
		else if (!/\d/.test(password.value)) {
			errores.push('La contraseña debe contener al menos un dígito');
			password.classList.add('is-invalid');
			// Contener al menos una minúscula
		} else if (!/[a-z]/.test(password.value)) {
			errores.push('La contraseña debe contener al menos una mínuscula');
			password.classList.add('is-invalid');
		} else if (!/[A-Z]/.test(password.value)) {
			errores.push('La contraseña debe contener al menos una mayúscula');
			password.classList.add('is-invalid');
		} else {
			password.classList.add('is-valid');
			password.classList.remove('is-invalid');
			form.image.focus();
		}

		image.addEventListener('change', validandoImagen);

		function validandoImagen() {
			const formatos = ['jpg', 'jpeg', 'png', 'gif'];
			const { name: fileName } = this.files[0];
			const fileExtension = fileName.split('.').pop();

			if (!formatos.includes(fileExtension)) {
				alert('Formato no válido');
				this.value = null;
			} else {
				image.classList.add('is-valid');
				image.classList.remove('is-invalid');
			}
		}

		// errores
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
