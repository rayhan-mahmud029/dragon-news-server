const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// get data
const categories = require('./data/categories.json');


// give access using cors
app.use(cors());


app.get('/', (req, res) => {
    res.send('Working')
})

app.get('/categories', (req, res) => {
    res.send(categories);

})

app.listen(port, () => {
    console.log('working in port ', port);
})
