const express = require('express')
const app = express()

// setting up morgan for better HTTP logging
/* remember this is middleware that must be installed */
const morgan = require("morgan");
app.use(morgan("dev"));

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public')); 

const PORT = 3000;


// menu object array

const menu = {
    
    burgerOTDAY: [
        {day: "Sunday", burger: "placeholder1", desc: "placeholder1", img: '/images/burger1.jpg', price: 15.00 },
        {day: "Monday", burger: "placeholder2", desc: "placeholder2", price: 15.00 },
        {day: "Tuesday", burger: "placeholder3", desc: "placeholder3", price: 15.00 },
        {day: "Wednesday", burger: "placeholder4", desc: "placeholder4", price: 15.00 },
        {day: "Thursday", burger: "placeholder5", desc: "placeholder5", price: 15.00 },
        {day: "Friday", burger: "placeholder6", desc: "placeholder6", price: 15.00 },
        {day: "Saturday", burger: "placeholder7", desc: "placeholder7", price: 15.00 },
    ],

    mains: [
        {item: 1, entree: "placeholde1", desc: "placeholder1", price: 99.99},
        {item: 2, entree: "placeholde2", desc: "placeholder2", price: 99.99},
        {item: 3, entree: "placeholde3", desc: "placeholder3", price: 99.99},
        {item: 4, entree: "placeholde4", desc: "placeholder4", price: 99.99},
    ],

    sides: [
        {item: 1, side: "placeholde1", desc: "placeholder1", price: 99.99},
        {item: 2, side: "placeholde2", desc: "placeholder2", price: 99.99},
        {item: 3, side: "placeholde3", desc: "placeholder3", price: 99.99},
        {item: 4, side: "placeholde4", desc: "placeholder4", price: 99.99},
    ],

}

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