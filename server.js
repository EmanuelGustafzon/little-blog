const express = require('express')
const app = express()

const mongoose = require('mongoose');
require('dotenv').config()
const URL = process.env.mongoDBURL

const port = process.env.PORT || 3000; // Add port in terminal with export PORT=port

const Product = require('./models/Product')

mongoose.set('strictQuery', true);
mongoose.connect(URL)

app.use(express.json())

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)

app.listen(port, () => console.log('server started'))

run()
async function run() {
    const product = await Product.create({name: 'Saab', price: 10})
    product.name = 'Bmw'
    product.save()
    console.log(product)
}










