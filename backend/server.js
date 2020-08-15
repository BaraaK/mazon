import express from 'express'
import data from './products'

const app = express();
const PORT = process.env.PORT || 3001

app.get('/products', (req,res) => {
    res.send(data.products)
})

app.listen(PORT, () => console.log(`server starts on port: ${PORT}`))