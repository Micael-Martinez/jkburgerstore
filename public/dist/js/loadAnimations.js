
const textDOM = document.querySelector(".container__const");
const symbolCONST = document.querySelector(".symbol__const__img");
const symbolTextCONST = document.querySelector(".symbol__const__text");
const symbol = document.querySelector(".symbol__img");
const symbolText = document.querySelector(".symbol__text");


document.addEventListener("DOMContentLoaded", () => {
    // Esto es del index de construccion
    symbolCONST.classList.add("transformSymbolGIFCONST");
    symbolTextCONST.classList.add("transformLettersGIFCONST");

    setTimeout(function() {
      symbolTextCONST.classList.remove("transformLettersGIFCONST");
      symbolTextCONST.classList.add("transformLettersGIFCONSTAfter");
      // Esto es del index de construccion FIN

    }, 2001);



  });

  symbol.classList.add("transformSymbolGIF");
  symbolText.classList.add("transformLettersGIF");
 // Esto es de la index.html original

// Esto es de la index.html original FIN.

//   Animación construcción de efecto de maquina de escribir en config-typed.js

