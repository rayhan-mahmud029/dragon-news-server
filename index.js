const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// get data
const categories = require('./data/categories.json');
const news = require('./data/news.json');


// give access using cors
app.use(cors());


app.get('/', (req, res) => {
    res.send('Working')
})


// send categories data
app.get('/categories', (req, res) => {
    res.send(categories);
})

// send all news data
app.get('/news', (req, res) => {
    res.send(news)
})

//send specif id news data
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    console.log('searching news data for ', id);
    const searchedNews = news.find(n => n._id === id);
    res.send(searchedNews);

})

//send specif category news data
app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('searching news data for category', id);

    if (id === 0) {
        res.send(news)
    } else {
        const searchedNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(searchedNews);
    }
})

app.listen(port, () => {
    console.log('working in port ', port);
})
