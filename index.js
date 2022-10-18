const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const category= require('./data/category.json')

app.get('/', (req, res)=>{
    res.send('News Api aggain Running')
});

app.use(cors())
app.get('/news-categories', (req, res)=>{
    res.send(category)
})

app.listen(port, ()=>{
    console.log('Dragon News running', port);
})