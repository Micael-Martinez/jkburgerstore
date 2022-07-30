if (process.env.NODE_ENV !== 'production') {  //Si no estamos en producción,  usamos la biblioteca .env
    require('dotenv').config()
}

// const MPPublicKey = process.env.MP_PUBLIC_KEY //Se conecta a la API DE MP
// const MPSecretKey = process.env.MP_SECRET_KEY
// console.log(MPPublicKey, MPSecretKey);

const express = require('express')
const app = express()
const fs = require('fs') //Para leer diferentes archivos, como JSON.
const path = require('path') //
const cors = require('cors');



app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}))

//Para hacer publico el contenido dentro de esta carpeta
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set('views', path.join('public/views')); //redefine express defaults settings

//Se va a borrar al llegar a las 12 PM, pero antes guardarlo en un excel

let listaDePedidos = [
    // {
    //     username: 'micael',
    //     phone: '2984734813',
    //     direccion: 'Ing bichi 75',
    //     barrio: 'en el centro',
    // }
]

//LAS PRUEBITAS
app.get('/', (req, res) => {
    fs.readFile('productsPrice.json', function (error, data) {
        if (error) {
            res.status(500).end()
        } else {
            res.render('index.ejs', {
                // items: JSON.parse(data)

            })
        }
    })
})



app.get('/pedidos', (req, res) => {
    console.log(req.body)

    res.status(200).render("pedidos", { listaDePedidos })
})

app.get('/api/pedidos', (req, res) => {
    res.json(listaDePedidos)
})

app.post('/pedidos', (req, res) => {
    const { username, phone, direccion, barrio, hour, minutes, cart } = req.body

    if (!req.body) {
        res.status(404).json({
            error: 'No se encontro el body'
        })
    }

    let newPedido = {
        username,
        phone,
        direccion,
        barrio,
        hour,
        minutes,
        cart
    }

    listaDePedidos = [...listaDePedidos, newPedido]
    // console.log(newPedido)
    console.log(req.body)
    res.status(201).json(listaDePedidos)

})
//LAS PRUEBITAS


// app.set("views", __dirname + "public/views");
///





const PORT = 3000
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))