const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "zs5ax8zxcdh7",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "Q-aN1QghQ9d3OuNo5om0ni_C48STFpUoTJO0HYFPcU0",
});

//   console.log(client);

//variables
//Antes de clickear el boton
const cartBtn = document.querySelector(".cartBtn");
const cartItems = document.querySelector(".cartBtn-items");

//Al clickear el boton
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const buyCartBtn = document.querySelector(".button-buy");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartContent = document.querySelector(".cart-content");
const cartTotal = document.querySelector(".cart-total");
const productsDOM = document.querySelector(".grid.displayProducts");

// cart
let cart = [];
//buttons
let buttonsDOM = [];

// Getting the products
class Products {
    async getProducts() {
        try {
            let contentful = await client.getEntries({
                content_type: "productsFlight",
            });
            // console.log(contentful);

            let result = await fetch("../../../products.json"); // ./../../../public/products.json o products.json
            let data = await result.json(); //Interpreta como json javascript.
            let products = data.items; //items es un array de todos los items(objetos) que existen
            // let products = contentful.items;

            products = products.map((item) => {
                const { title, type, cant, selected, symbolPrice, price, description, description2 } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { title, type, cant, selected, symbolPrice, price, description, description2, id, image };
            });
            console.log(products, "array con todas los objetos hamburguesa"); //un array de objetos
            return products;
            // return data;
        } catch (error) {
            console.log(error);
        }
    }
}

//display products
class UI {
    displayProducts(products) {
        console.log(products);
        let result = "";
        let box20units = products.filter((product) => product.id % 2 === 1);
        console.log(box20units);

        box20units.forEach((product) => {
            result += `
            <article class="card ${product.type}">
                <h2 class="card__title ${product.type}">${product.title}</h2>
                <div class="card__img ${product.type}"></div>
                <p class="card__description ${product.type}">
                    ${product.description}
                </p>
                <p class="card__description2 ${product.type}">
                ${product.description2}
                </p>
                <div class="card__price ${product.type}">
                    <div class="card__price-container">
                        <div>
                            <div class="card__price-selec">
                                <div class="card__price-selec-20 ${product.type} ${product.selected}">
                                    <input type="radio" class="radio" id=${product.cajaDe20} name="category">
                                    <label for="20">1 unidad</label>
                                    <i class="fas fa-chevron-down abajo ${product.type}"></i>
                                </div>
                                <div class="card__price-selec-10 ${product.type}">
                                    <input type="radio" class="radio" id=${product.cajaDe10} name="category">
                                    <label for="10">2 unidades</label>
                                </div>
                            </div>

                            <span class="card__price-number ${product.type} ">${product.symbolPrice}${product.price}</span><span class="card__price-place ${product.type}">ARS</span>
                        </div>
                    </div>

                    <button class="card__price-button ${product.type}" data-id= ${product.id}>
                    <i class="fas fa-shopping-cart"></i> Añadir
                    </button>
                </div>
            </article>
            `;
        });
        productsDOM.innerHTML = result;
        //FIN DE MOSTRAR SOLO EN PANTALLA LOS DE 1 unidad DEL JSON

        /* ***** FUNCIONALIDAD DE SELECCION ENTRE 10 Y 1 unidad ***** */
        //VARIABLES

        const selectedprovopepper = document.querySelector(".selectedprovopepper");
        const selectedumami = document.querySelector(".selectedumami");
        const selectedcrispy = document.querySelector(".selectedcrispy");

        const option10crispy = document.querySelector(".card__price-selec-10.crispy");
        const option20crispy = document.querySelector(".card__price-selec-20.crispy");
        const option10umami = document.querySelector(".card__price-selec-10.umami");
        const option20umami = document.querySelector(".card__price-selec-20.umami");
        const option10provopepper = document.querySelector(".card__price-selec-10.provopepper");
        const option20provopepper = document.querySelector(".card__price-selec-20.provopepper");

        const placecrispy = document.querySelector(".card__price-place.crispy");
        const placeumami = document.querySelector(".card__price-place.umami");
        const placeprovopepper = document.querySelector(".card__price-place.provopepper");
        const aux20 = "1 unidad";
        const aux10 = "2 unidades";
        const priceprovopepper = document.querySelector(".card__price-number.provopepper");
        const priceumami = document.querySelector(".card__price-number.umami");
        const pricecrispy = document.querySelector(".card__price-number.crispy");
        const h2 = document.querySelector(".card__title");

        //VARIABLES

        //Funcionalidad de opcion crispy.
        let contadorcrispy = 0;

        selectedcrispy.addEventListener("click", () => {
            contadorcrispy++;
            console.log(contadorcrispy);
            option10crispy.classList.toggle("active");
            pricecrispy.classList.add("hidden");
            placecrispy.classList.add("hidden");

            if (contadorcrispy == 2 && selectedcrispy.querySelector("label").textContent == aux20) {
                contadorcrispy = 0;
                console.log(contadorcrispy);
                pricecrispy.classList.remove("hidden");
                placecrispy.classList.remove("hidden");
            }

            if (contadorcrispy == 2 && selectedcrispy.querySelector("label").textContent == aux10) {
                contadorcrispy = 0;
                console.log(contadorcrispy);
                pricecrispy.classList.remove("hidden");
                placecrispy.classList.remove("hidden");
            }
        });

        option10crispy.addEventListener("click", () => {
            //VER ACA
            contadorcrispy = 0;
            // console.log(contador);
            //Al hacer click en la opción de 2 unidades por primera vez..
            pricecrispy.classList.remove("hidden");
            placecrispy.classList.remove("hidden");

            if (selectedcrispy.querySelector("label").textContent == aux10) {
                selectedcrispy.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">1 unidad</label> <i class="fas fa-chevron-down abajo crispy"></i>`;
                option10crispy.classList.remove("active");
                option10crispy.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">2 unidades</label>`;

                pricecrispy.innerHTML = `$${products[0].price}`;
                pricecrispy.classList.remove("transitionColorcrispy2");
                pricecrispy.classList.add("transitionColorcrispy1");
            } else {
                selectedcrispy.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">2 unidades</label> <i class="fas fa-chevron-down abajo crispy"></i>`;
                option10crispy.classList.remove("active");
                option10crispy.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">1 unidad</label>`;

                pricecrispy.innerHTML = `$${products[1].price}`;
                pricecrispy.classList.remove("transitionColorcrispy1");
                pricecrispy.classList.add("transitionColorcrispy2");
            }
        });
        //Fin de funcionalidad de opcion crispy.

        //Funcionalidad de opción umami.
        let contadorumami = 0;

        selectedumami.addEventListener("click", () => {
            contadorumami++;
            // console.log(contadorumami);
            option10umami.classList.toggle("active");
            priceumami.classList.add("hidden");
            placeumami.classList.add("hidden");

            if (contadorumami == 2 && selectedumami.querySelector("label").textContent == aux20) {
                contadorumami = 0;
                // console.log(contadorumami);
                priceumami.classList.remove("hidden");
                placeumami.classList.remove("hidden");
            }

            if (contadorumami == 2 && selectedumami.querySelector("label").textContent == aux10) {
                contadorumami = 0;
                // console.log(contadorumami);
                priceumami.classList.remove("hidden");
                placeumami.classList.remove("hidden");
            }
        });

        option10umami.addEventListener("click", () => {
            //Al hacer click en la opción de 2 unidades por primera vez..
            contadorumami = 0;
            // console.log(contadorumami);
            priceumami.classList.remove("hidden");
            placeumami.classList.remove("hidden");

            if (selectedumami.querySelector("label").textContent == aux10) {
                selectedumami.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">1 unidad</label> <i class="fas fa-chevron-down abajo umami"></i>`;
                option10umami.classList.remove("active");
                option10umami.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">2 unidades</label>`;

                priceumami.innerHTML = `$${products[2].price}`;
                priceumami.classList.remove("transitionColorumami2");
                priceumami.classList.add("transitionColorumami1");
            } else {
                selectedumami.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">2 unidades</label> <i class="fas fa-chevron-down abajo umami"></i>`;
                option10umami.classList.remove("active");
                option10umami.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">1 unidad</label>`;

                priceumami.innerHTML = `$${products[3].price}`;
                priceumami.classList.remove("transitionColorumami1");
                priceumami.classList.add("transitionColorumami2");
            }
        });
        //Fin de Funcionalidad de opción umami.

        //Funcionalidad de opción provopepper.
        let contadorprovopepper = 0;

        selectedprovopepper.addEventListener("click", () => {
            contadorprovopepper++;
            // console.log(contadorprovopepper);
            option10provopepper.classList.toggle("active");
            priceprovopepper.classList.add("hidden");
            placeprovopepper.classList.add("hidden");

            if (contadorprovopepper == 2 && selectedprovopepper.querySelector("label").textContent == aux20) {
                contadorprovopepper = 0;
                // console.log(contadorprovopepper);
                priceprovopepper.classList.remove("hidden");
                placeprovopepper.classList.remove("hidden");
            }

            if (contadorprovopepper == 2 && selectedprovopepper.querySelector("label").textContent == aux10) {
                contadorprovopepper = 0;
                // console.log(contadorprovopepper);
                priceprovopepper.classList.remove("hidden");
                placeprovopepper.classList.remove("hidden");
            }
        });

        option10provopepper.addEventListener("click", () => {
            contadorprovopepper = 0;
            priceprovopepper.classList.remove("hidden");
            placeprovopepper.classList.remove("hidden");
            //Al hacer click en la opción de 2 unidades por primera vez..

            if (selectedprovopepper.querySelector("label").textContent == aux10) {
                selectedprovopepper.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">1 unidad</label> <i class="fas fa-chevron-down abajo provopepper"></i>`;
                option10provopepper.classList.remove("active");
                option10provopepper.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">2 unidades</label>`;

                priceprovopepper.innerHTML = `$${products[4].price}`;
                priceprovopepper.classList.remove("transitionColorprovopepper2");
                priceprovopepper.classList.add("transitionColorprovopepper1");
            } else {
                selectedprovopepper.innerHTML = `<input type="radio" class="radio" id="diez" name="category"> <label for="diez">2 unidades</label> <i class="fas fa-chevron-down abajo provopepper"></i>`;
                option10provopepper.classList.remove("active");
                option10provopepper.innerHTML = `<input type="radio" class="radio" id="veinte" name="category"> <label for="veinte">1 unidad</label>`;

                priceprovopepper.innerHTML = `$${products[5].price}`;
                priceprovopepper.classList.remove("transitionColorprovopepper1");
                priceprovopepper.classList.add("transitionColorprovopepper2");
            }
        });
        /* ***** FIN FUNCIONALIDAD DE SELECCION ENTRE 10 Y 1 unidad ***** */
    }

    getBuyButtons() {
        const buttons = [...document.querySelectorAll(".card__price-button")];
        buttonsDOM = buttons;
        console.log(buttons);
        buttons.forEach((button) => {
            let id = button.dataset.id;
            // console.log(id);
            let inCart = cart.find((item) => item.id === id);
            if (inCart) {
                button.innerText = "Añadida";
                button.disabled = true;
            }
            button.addEventListener("click", (event) => {
                event.target.innerText = "In Cart";
                event.target.disabled = true;
                //get product from products, obtene las mismas propiedades que el producto, se clona pero añadiendole un 1 de amount
                let cartItem = { ...Storage.getProduct(id), amount: 1 };

                // console.log(cartItem);

                //add product to the cart
                // Copia el valor de cart y añade ademas el valor cartitem a cart, es decir que cart aca adentro vale cart de arriba + cartItem
                cart = [...cart, cartItem];
                console.log(cart);
                //save cart in Local Storage (mirarlo en Application al apretar cntrl + c)
                Storage.saveCart(cart);
                //set cart values
                this.setCartValues(cart);
                //display cart item desde metodo
                this.addCartItem(cartItem);
                //show the cart
                this.showCart();
            });
        });
    }

    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map((item) => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
        //   console.log(cartTotal, cartItems);
    }

    addCartItem(item) {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        if (item.type === "crispy") {
            div.classList.add("crispy");
        } else if (item.type === "umami") {
            div.classList.add("umami");
        } else if (item.type === "provopepper") {
            div.classList.add("provopepper");
        }
        div.innerHTML = `<img class="cart-item__img ${item.type}" src=${item.image} alt="product">
        <div>
            <h4 class="cart-item__title">Hamburguesa <span class="cart-item__span-${item.type}">${item.title}</span></h4>
            <h5 class="cart-item__price">$${item.price}</h5>
            <span class="cart-item__remove" data-id=${item.id}>Eliminar</span>
        </div>
        <div>
            <i class="fas fa-chevron-up arriba ${item.type}" data-id=${item.id}></i>
            <p class="item-amount">${item.amount}</p>
            <i class="fas fa-chevron-down abajo ${item.type}" data-id=${item.id}></i>
        </div>`;

        cartContent.appendChild(div);
        // console.log(cartContent);
    }

    showCart() {
        cartOverlay.classList.add("transparentBcg");
        cartDOM.classList.add("showCart");
    }

    setupAPP() {
        cart = Storage.getCart();
        this.setCartValues(cart);
        this.populateCart(cart);

        // Al hacer click en el carrito, se muestra.
        cartBtn.addEventListener("click", this.showCart);
        closeCartBtn.addEventListener("click", this.hideCart);
    }

    populateCart(cart) {
        cart.forEach((item) => this.addCartItem(item));
    }

    hideCart() {
        cartOverlay.classList.remove("transparentBcg");
        cartDOM.classList.remove("showCart");
    }

    cartLogic() {
        // Clear cart button
        clearCartBtn.addEventListener("click", () => {
            this.clearCart();
        });

        buyCartBtn.addEventListener("click", () => {
            this.buyCart();
        });

        // Cart functionality

        cartContent.addEventListener("click", (event) => {
            // Con target targeteo los hijos del content al hacerle click
            //Al hacer click en eliminar(filtro con el if) se elimina el contenido.
            if (event.target.classList.contains("cart-item__remove")) {
                console.log("helloworld");
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement);
                // console.log(removeItem.parentElement.parentElement);
                this.removeItem(id);
            } else if (event.target.classList.contains("fa-chevron-up")) {
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                // console.log(addAmount);
                // Si el item tiene el mismo id que el target
                let tempItem = cart.find((item) => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                // nextElementSibling devuelve el siguiente nodo hermano de addAmount que es el contador.
                addAmount.nextElementSibling.innerText = tempItem.amount;
            } else if (event.target.classList.contains("fa-chevron-down")) {
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find((item) => item.id === id);
                tempItem.amount = tempItem.amount - 1;

                if (tempItem.amount > 0) {
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                } else {
                    cartContent.removeChild(lowerAmount.parentElement.parentElement);
                    this.removeItem(id);
                }
            }
        });
    }

    clearCart() {
        // console.log(this);
        let cartItems = cart.map((item) => item.id);
        cartItems.forEach((id) => this.removeItem(id));
        // console.log(cartItems);
        console.log(cartContent.children);

        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0]);
        }

        this.hideCart();
    }

    buyCart() {
        alert("Thank you for your purchase");

        let cartItems = cart.map((item) => item.id);
        cartItems.forEach((id) => this.removeItem(id));

        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0]);
        }

        this.hideCart();
    }

    removeItem(id) {
        // Si el id es diferente del de el parametro, se queda en el   display.
        cart = cart.filter((item) => item.id !== id);
        this.setCartValues(cart);
        Storage.saveCart(cart);

        let button = this.getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `<i class="fas fa-shopping-cart"></i> Añadir`;
    }

    getSingleButton(id) {
        return buttonsDOM.find((button) => button.dataset.id === id);
    }
}

//Local storage
class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }

    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem("products"));
        return products.find((product) => product.id === id);
    }

    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    static getCart() {
        return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    // Setup app
    ui.setupAPP();

    // get all products
    products
        .getProducts()
        .then((products) => {
            ui.displayProducts(products);
            Storage.saveProducts(products);
        })
        .then(() => {
            ui.getBuyButtons();
            ui.cartLogic();
        });
});
