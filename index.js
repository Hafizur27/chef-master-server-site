const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const categories = require('./data/chefsCategories.json');
const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send(chefs)
})
app.get('/categories', (req, res) =>{
    res.send(categories)
})
app.get('/chefs',(req, res) =>{
    res.send(chefs)
})
app.get('/chefs/:id',(req, res) =>{
    const id = req.params.id;
    const selectedChefs = chefs.find(n =>n._id ==id)
    res.send(selectedChefs)
})
app.get('/categories/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const categoryChefs = chefs.filter(n =>n.category_id ==id)
    res.send(categoryChefs)
})

app.listen(port, () =>{
    console.log(`chef api is running on port: ${port}`)
})
