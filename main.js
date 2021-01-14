const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

// Template Engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });