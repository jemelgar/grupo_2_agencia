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

		let email = document.querySelector('#email');
		let password = document.querySelector('#password');

		// Validación

		if (email.value == '') {
			errores.push('Debe de ingresar su email de usuario');
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
			errores.push('Ingrese su contraseña');
			password.classList.add('is-invalid');
		} else {
			password.classList.add('is-valid');
			password.classList.remove('is-invalid');
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
