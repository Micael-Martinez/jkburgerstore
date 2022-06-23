// setTimeout(function() {let result = `<p class="container__const__text">Nuestro sitio está en construcción...<br><br/> Pronto podrás tener tus cigarrillos <br><span class="typed"> </span> <br>por aquí &#128521;</p>`;

// textDOM.innerHTML = result;}, 1500);
    // // Pronto podrás tener tus cigarrillos <span class="typed"> </span> por aquí


const typed = new Typed('.typed', {
    strings: [,
     '<i class="suave-const">Suaves</i>',
      '<i class="energy-const">Energy</i>',
      '<i class="mentolado-const">Mentolados</i>'],
      

      	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

