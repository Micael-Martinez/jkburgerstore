function formPost(cart, cartTotal) {
    const $formPost = document.querySelector("#formPost");
    console.log($formPost)

    //add data without inputs

    $formPost.addEventListener('submit', (event) => {

        event.preventDefault()
        console.log(cartTotal.textContent, 'textContent')


        const prePayload = new FormData($formPost); //return object formData
        console.log(cart, 'carrito en append')
        prePayload.append('cart', JSON.stringify(cart))

        const payload = new URLSearchParams(prePayload)

        // console.log(...prePayload)

        fetch('http://localhost:3000/pedidos', {
            method: "POST",
            body: payload,
        })
            .then(res => res.json(), 'holiwis')
            .then(data => console.log(data, 'helloworld'))
            .catch(err => console.log(err))

    })
}

export { formPost }