////seleccion de texto

document.addEventListener('mouseup', () => {
	let selected = window.getSelection().toString(); //API SELECTION MAS INFORMACION
	console.log(selected);
});

////copiar el texto, sin necesidad del ctrl + c

document.addEventListener('mouseup', () => {
	let selected = window.getSelection().toString();
	let copySelected = document.execCommand('copy'); //permite copiar el texto que hemos seleccionado
	copySelected ? copySelected : console.log('El navegador no soporte el comando copy');
})