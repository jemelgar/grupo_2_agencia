window.onload = function () {
	console.log('Funcionando conexión con vista');
	let image = document.getElementById('imagen');

	image.addEventListener('change', validandoImagen);

	function validandoImagen() {
		const formatos = ['jpg', 'jpeg', 'png', 'gif'];
		const { name: fileName } = this.files[0];
		const fileExtension = fileName.split('.').pop();

		if (!formatos.includes(fileExtension)) {
			alert('Formato no válido');
			console.log('Formato no valido');
			this.value = null;
		} else {
			console.log('Formato valido');
		}
	}
};
//  else {
// 	image.classList.add('is-valid');
// 	image.classList.remove('is-invalid');
// }
