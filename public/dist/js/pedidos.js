const WrapperPedido = document.querySelector('.pedidos__wrapper2')

async function fetchText() {
    let pedidos = await fetch('http://localhost:3000/api/pedidos')
        .then(res => res.json())
        .then(data => {
            let result = '';
            data.forEach(pedido => {
                const { username, phone, direccion, barrio, hour, minutes } = pedido

                result += `
                <div class="pedido">
                    <div class="pedido__hour">
                        <h2>${hour}:${minutes}</h2>
                        <p class="pedido__hour__entrega">(Horario de entrega)</p>
                    </div>
                    <div class="pedido__description">
                        <div class="pedido__burgersToDo">
                                ${variety()}
                        </div>
                        <div class="pedido__contact">
                            <p>${username}</p>
                            <p>${direccion}</p>
                            <p>${barrio}</p>
                            <p>${phone}</p>
                        </div>
                    </div>
                </div>
                `

                function variety() {
                    let burgers = pedido.cart;
                    console.log(burgers, 'q onda porq no funca')
                    let burgersHTML = '';
                    JSON.parse(burgers).forEach(variety => {
                        burgersHTML += `
                        <div class="pedido__burgersToDo__variety">${variety.title}</div>
                        `
                    })
                    return burgersHTML
                }

            })






            WrapperPedido.innerHTML = result;
        })



}


fetchText()