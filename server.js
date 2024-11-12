const express = require('express')
const app = express()

// setting up morgan for better HTTP logging
/* remember this is middleware that must be installed */
const morgan = require("morgan");
app.use(morgan("dev"));

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public')); 

const PORT = 3000;

app.get('/', (req, res) => {
    console.log('Test');
    res.render('home.ejs')   
});

app.get('/menu', (req, res) =>{
    res.render('menu.ejs')
});

app.get('/about', (req, res) =>{
    res.render('about.ejs')
});

app.get('/staff', (req, res) => {
    res.render('staff.ejs')
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
});

app.get('/links', (req, res) => {
    res.render('links.ejs')
});















app.listen(PORT);