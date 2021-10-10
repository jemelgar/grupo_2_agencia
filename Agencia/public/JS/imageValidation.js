console.log('Conexión validación imagenes');
let image = document.getElementById('imagen');
let errImage = 'Formato de imagen no valido';
let ulErrors = document.querySelector('.errores');
image.addEventListener('change', validandoImagen);

function validandoImagen() {
	const formatos = ['jpg', 'jpeg', 'png', 'gif'];
	const { name: fileName } = this.files[0];
	const fileExtension = fileName.split('.').pop();

	if (!formatos.includes(fileExtension)) {
		ulErrors.classList.add('alert-warning');
		ulErrors.innerHTML += `<li >  ${errImage} </li>`;
		console.log('Formato no valido');
		this.value = null;
	} else {
		ulErrors.innerHTML = '';
		console.log('Formato valido');
	}
}
