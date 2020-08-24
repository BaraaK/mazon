import express from 'express'
import data from './products'

const app = express();
const PORT = process.env.PORT || 5000

app.get('/products', (req,res) => {
    res.send(data.products)
})
app.get('/products/:id', (req,res) => {
    const productId = req.params.id;
    const info = data.products.filter((item) => item._id === productId)
    res.send(info);
})

app.listen(PORT, () => console.log(`server starts on port: ${PORT}`))