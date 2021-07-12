if (process.env.NODE_ENV !== 'production') {  //Si no estamos en producción, no usamos la biblioteca .env
    require('dotenv').config()
}

const MPPublicKey = process.env.MP_PUBLIC_KEY //Se conecta a la API DE MP
const MPSecretKey = process.env.MP_SECRET_KEY 
console.log(MPPublicKey, MPSecretKey);

const express = require('express')
const app = express()
const fs = require('fs') //Para leer diferentes archivos, como JSON.
const path = require('path') //

app.set('views', path.join(__dirname, 'views')) //
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    fs.readFile('productsPrice.json', function(error, data) {
        if (error) {
            res.status(500).end()
        } else {
            res.render('index.ejs', {
                items: JSON.parse(data)
                
            })
        }
    })
})

app.listen(3000)