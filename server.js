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



// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Para hacer publico el contenido dentro de esta carpeta
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set('views', path.join('public/views')); //redefine express defaults settings





// app.set("views", __dirname + "public/views");
///

app.get('/', (req, res) => {
    fs.readFile('productsPrice.json', function (error, data) {
        if (error) {
            res.status(500).end()
        } else {
            res.render('index.ejs', {
                items: JSON.parse(data)

            })
        }
    })
})

const PORT = 3000
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))