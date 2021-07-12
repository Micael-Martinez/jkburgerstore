// const selectedMentolado = document.querySelector(".selectedMentolado");
// const selectedEnergy = document.querySelector(".selectedEnergy");
// const selectedSuave = document.querySelector(".selectedSuave");

// const option10Suave = document.querySelector(".card__price-selec-10.suave");
// const option20Suave = document.querySelector(".card__price-selec-20.suave");
// const option10Energy = document.querySelector(".card__price-selec-10.energy");
// const option20Energy = document.querySelector(".card__price-selec-20.energy");
// const option10Mentolado = documen t.querySelector(
//   ".card__price-selec-10.mentolado"
// );
// const option20Mentolado = document.querySelector(
//   ".card__price-selec-20.mentolado"
// );

// const placeSuave = document.querySelector(".card__price-place.suave");
// const placeEnergy = document.querySelector(".card__price-place.energy");
// const placeMentolado = document.querySelector(".card__price-place.mentolado");
// const aux20 = "20 unidades";
// const aux10 = "10 unidades";
// const priceMentolado = document.querySelector(".card__price-number.mentolado");
// const priceEnergy = document.querySelector(".card__price-number.energy");
// const priceSuave = document.querySelector(".card__price-number.suave");
// const h2 = document.querySelector(".card__title");

// //Funcionalidad de opcion Suave.
// selectedSuave.addEventListener("click", () => {
//   option10Suave.classList.toggle("active");
//   priceSuave.classList.add("hidden");
//   placeSuave.classList.add("hidden");
// });

// option10Suave.addEventListener("click", () => {
//   //Al hacer click en la opción de 10 unidades por primera vez..
//   priceSuave.classList.remove("hidden");
//   placeSuave.classList.remove("hidden");

//   if (selectedSuave.querySelector("label").textContent == aux10) {
//     selectedSuave.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">20 unidades</label> <i class="fas fa-chevron-down abajo suave"></i>`;
//     option10Suave.classList.remove("active");
//     option10Suave.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">10 unidades</label>`;

//     priceSuave.innerHTML = "$190";
//     priceSuave.classList.remove("transitionColorSuave2");
//     priceSuave.classList.add("transitionColorSuave1");
//   } else {
//     selectedSuave.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">10 unidades</label> <i class="fas fa-chevron-down abajo suave"></i>`;
//     option10Suave.classList.remove("active");
//     option10Suave.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">20 unidades</label>`;

//     priceSuave.innerHTML = "$110";
//     priceSuave.classList.remove("transitionColorSuave1");
//     priceSuave.classList.add("transitionColorSuave2");
//   }
// });
// //Fin de funcionalidad de opcion Suave.

// //Funcionalidad de opción Energy.
// selectedEnergy.addEventListener("click", () => {
//   option10Energy.classList.toggle("active");
//   priceEnergy.classList.add("hidden");
//   placeEnergy.classList.add("hidden");
// });

// option10Energy.addEventListener("click", () => {
//   //Al hacer click en la opción de 10 unidades por primera vez..
//   priceEnergy.classList.remove("hidden");
//   placeEnergy.classList.remove("hidden");

//   if (selectedEnergy.querySelector("label").textContent == aux10) {
//     selectedEnergy.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">20 unidades</label> <i class="fas fa-chevron-down abajo energy"></i>`;
//     option10Energy.classList.remove("active");
//     option10Energy.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">10 unidades</label>`;

//     priceEnergy.innerHTML = "$190";
//     priceEnergy.classList.remove("transitionColorEnergy2");
//     priceEnergy.classList.add("transitionColorEnergy1");
//   } else {
//     selectedEnergy.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">10 unidades</label> <i class="fas fa-chevron-down abajo energy"></i>`;
//     option10Energy.classList.remove("active");
//     option10Energy.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">20 unidades</label>`;

//     priceEnergy.innerHTML = "$110";
//     priceEnergy.classList.remove("transitionColorEnergy1");
//     priceEnergy.classList.add("transitionColorEnergy2");
//   }
// });
// //Fin de Funcionalidad de opción Energy.

// //Funcionalidad de opción Mentolado.
// selectedMentolado.addEventListener("click", () => {
//   option10Mentolado.classList.toggle("active");
//   priceMentolado.classList.add("hidden");
//   placeMentolado.classList.add("hidden");
// });

// option10Mentolado.addEventListener("click", () => {
//   priceMentolado.classList.remove("hidden");
//   placeMentolado.classList.remove("hidden");
//   //Al hacer click en la opción de 10 unidades por primera vez..

//   if (selectedMentolado.querySelector("label").textContent == aux10) {
//     selectedMentolado.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">20 unidades</label> <i class="fas fa-chevron-down abajo mentolado"></i>`;
//     option10Mentolado.classList.remove("active");
//     option10Mentolado.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">10 unidades</label>`;

//     priceMentolado.innerHTML = "$190";
//     priceMentolado.classList.remove("transitionColorMentolado2");
//     priceMentolado.classList.add("transitionColorMentolado1");
//   } else {
//     selectedMentolado.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">10 unidades</label> <i class="fas fa-chevron-down abajo mentolado"></i>`;
//     option10Mentolado.classList.remove("active");
//     option10Mentolado.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">20 unidades</label>`;

//     priceMentolado.innerHTML = "$110";
//     priceMentolado.classList.remove("transitionColorMentolado1");
//     priceMentolado.classList.add("transitionColorMentolado2");
//   }
// });
//Fin de Funcionalidad de opción Mentolado.

// console.log(selected.querySelector("label").textContent);
