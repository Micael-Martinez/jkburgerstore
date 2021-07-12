class Hamburguesa {
	constructor(nombre, ingredients, precio, extra = null) {
		this.nombre = nombre;
		this.ingredients = ingredients;
		this.precio = precio;
		this.extra = extra;
	}

	addToOrder() {}

	set addExtra(extras) {
		this.extra = extras;
	}

	showIngredient() {
		// console.log(this.ingredients.length);
		let descripcion = "";
		for (let ingredient in this.ingredients) {
			if (ingredient == this.ingredients.length - 1) {
				descripcion += `y ${this.ingredients[ingredient]}.`;
			} else {
				//!usar join() para pasar Array a String
				descripcion += `${this.ingredients[ingredient]}, `;
			}
		}
		return `
        Nombre: <b>${this.nombre}</b> <br>
        Ingredientes: <b>${descripcion}</b> <br>
        Precio: <b>$ ${this.precio}</b> <br>
        Extras: <b style='color:red'>${this.extra}</b>

        `;
	}
}

// set modificarDinero(monto) {
//     this.dinero = monto;
// }

// get obtenerDinero() {
//     return this.dinero;
// }

//Ingredientes de cada Hamburguesa
//LÍNEA JK
const ingredientsBaconCheese2 = ["Doble carne 120g", "cheddar", "panceta"];
const ingredientsHeartBreaker = ["Carne 160g", "cheddar", "panceta", "cebolla caramelizada", "salsa barbacoa", "huevo a la plancha"];
const ingredientsProvoPepper = ["Carne 160g", "mayochimi", "provoleta parrillera", "jamón natural", "morrones asados"];
const ingredientsCrispyOnion = ["Doble carne 120g", "triple cheddar", "tomate", "pepinillos", "salsa barbacoa", "cebolla crispy"];

//LÍNEA VEGGIE
//!Mirar la herencia si cambia atributos del constructor o super al heredar los atributos
const ingredientsHeartBreakerVeggie = ["Medallón vegetariano", "cheddar", "cebolla caramelizada", "salsa barbacoa", "huevo a la plancha"];
const ingredientsClassicVeggie = ["Medallón Vegetariano", "cheddar", "tomate", "lechuga", "cebolla"];
const ingredientsUmamiVeggie = ["Medallón vegetariano", "queso tybo", "tomate", "cebolla", "rúcula", "alioli"];

//LÍNEA CLASSIC
const ingredientsBaconCheese = ["Carne 160g", "cheddar", "panceta"];
const ingredientsClassic = ["Carne 160g", "cheddar", "tomate", "lechuga", "cebolla"];
const ingredientsUmami = ["Carne 160g", "queso tybo", "tomate", "cebolla", "rúcula", "alioli"];
const ingredientsDobleCuarto = ["Doble carne 120g", "doble cheddar", "mostaza", "ketchup", "cebolla"];
const ingredientsJKids = ["Carne 120g", "cheddar"];

//Creando objetos
const baconCheese2 = new Hamburguesa("BACONCHEESE 2.0", ingredientsBaconCheese2, 570);
const heartBreaker = new Hamburguesa("HEARTBREAKER", ingredientsHeartBreaker, 550);
const provoPepper = new Hamburguesa("PROVOPEPPER", ingredientsProvoPepper, 600);
const crispyOnion = new Hamburguesa("CRISPY ONION", ingredientsCrispyOnion, 600);

const heartBreakerVeggie = new Hamburguesa("HEARTBREAKER VEGGIE", ingredientsHeartBreakerVeggie, 450);
const classicVeggie = new Hamburguesa("CLASSIC VEGGIE", ingredientsClassicVeggie, 450);
const umamiVeggie = new Hamburguesa("UMAMI VEGGIE", ingredientsUmamiVeggie, 450);

const baconCheese = new Hamburguesa("BACONCHEESE", ingredientsBaconCheese, 480);
const classic = new Hamburguesa("CLASSIC", ingredientsClassic, 480);
const umami = new Hamburguesa("UMAMI", ingredientsUmami, 500);
const dobleCuarto = new Hamburguesa("DOBLE CUARTO", ingredientsDobleCuarto, 550);
const JKids = new Hamburguesa("J-KIDS", ingredientsJKids, 400);

//!Añadir el extra a HB
document.write(`
    ${baconCheese2.showIngredient()} <br><br>
    ${heartBreaker.showIngredient()} <br><br>
    ${provoPepper.showIngredient()} <br><br>
    ${crispyOnion.showIngredient()} <br><br>
    ${heartBreakerVeggie.showIngredient()} <br><br>
    ${classicVeggie.showIngredient()} <br><br>
    ${umamiVeggie.showIngredient()} <br><br>
    ${baconCheese.showIngredient()} <br><br>
    ${classic.showIngredient()} <br><br>
    ${umami.showIngredient()} <br><br>
    ${dobleCuarto.showIngredient()} <br><br>
    ${JKids.showIngredient()} <br><br>
`);

//!Ver métodos Object para retornar clave y valor a la vez
const extras = {
	carne: 110,
	cheddar: 40,
	panceta: 60,
};
heartBreaker.extra = extras.carne;
console.log(heartBreaker.extra);

//?Tener en cuenta: Delivery, días abierto, extras, todas las hamburguesas vienen con papas incluidas

// const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"] //Si es lunes, mostrar una vista de estar cerrados. Ver un tutorial para manejar los días
