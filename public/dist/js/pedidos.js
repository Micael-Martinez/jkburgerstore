const WrapperPedido = document.querySelector('.pedidos__wrapper2')

async function fetchText() {
    let pedidos = await fetch('http://localhost:3000/api/pedidos')
        .then(res => res.json())
        .then(data => {
            let result = '';
            let totalPrice = 0;
            data.forEach(pedido => {
                const { username, phone, direccion, barrio, hour, minutes } = pedido

                result += `
                <div class="pedido">
                    <div class="pedido__hour">
                        <h2>${hour}:${minutes}</h2>
                        <p class="pedido__hour__entrega">(Horario de entrega)</p>
                    </div>
                    <div class="pedido__title">
                        <h3 class="pedido__title__burgers">Hamburguesas a crear</h3>
                        <h3 class="pedido__title__details">Datos de envio</h3>
                    </div>
                    <div class="pedido__description">
                        <div class="pedido__burgersContainer">
                            <div class="pedido__burgersToDo">
                                ${variety()}
                            </div>
                        </div>
                        <div class="pedido__contact">
                            <p>Nombre: ${username}</p>
                            <p>Dirección: ${direccion}</p>
                            <p>Barrio: ${barrio}</p>
                            <p>Teléfono: ${phone}</p>
                        </div>
                    </div>

                ${priceTotal()}
                </div>
                `

                function variety() {
                    let burgers = pedido.cart;
                    // console.log(burgers, 'q onda porq no funca')
                    let burgersHTML = '';
                    JSON.parse(burgers).forEach(variety => {
                        burgersHTML += `
                        <div class="pedido__burgersToDo__container">
                            <div class="pedido__burgersToDo__variety">${variety.title}</div>
                            <div class="pedido__burgersToDo__details">
                                <p>${variety.description}</p>
                                <p>Cantidad: ${variety.amount}</p>
                                <p>Precio: $${variety.price}</p>
                            </div>
                        </div>
                        `
                    })

                    return burgersHTML
                }

                function priceTotal() {
                    let burgers = pedido.cart;
                    let totalPrice = 0;
                    let totalPriceHTML = '';
                    JSON.parse(burgers).forEach(variety => {
                        totalPrice += Number(variety.amount) * Number(variety.price)
                    })

                    return `<div class="pedido__totalPrice">Precio total del pedido: $${totalPrice}</div>`

                }

            })

            WrapperPedido.innerHTML = result;

            const borderDetails = document.querySelector('.pedido__burgersToDo__details');
            data.forEach(pedido => {
                let burgers = pedido.cart;
                console.log(JSON.parse(burgers).length)
                if (JSON.parse(burgers).length <= 1) {
                    borderDetails.style.border = 'none';
                }
            })

        })




}


fetchText()