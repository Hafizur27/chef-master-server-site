const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/chefsCategories.json')

app.use(cors());

app.get('/', (req, res) =>{
    res.send('server is ready')
})
app.get('/categories', (req, res) =>{
    res.send(categories)
})

app.listen(port, () =>{
    console.log(`chef api is running on port: ${port}`)
})
