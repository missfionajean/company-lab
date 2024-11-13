const express = require('express');
const morgan = require("morgan");
const path = require('path');
const PORT = 3000;

const app = express()

// setting up morgan for better HTTP logging
/* remember this is middleware that must be installed */
app.use(morgan("dev"));

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public')); 



// menu object array

const menu = {
    //ARRAY FOR BURGER OF THE DAY
    burgerOTDAY: [
        {day: "Sunday", burger: "Couldn't be Fetta", desc: "Veggie burger surved with Fetta cheese", price: 15.00 },
        {day: "Monday", burger: "placeholder1", desc: "placeholder1",price: 15.00 },
        {day: "Tuesday", burger: "BEL Burger", desc: "Bacon Eggs and Letuce Burger",price: 15.00 },
        {day: "Wednesday", burger: "Bogota Chillie", desc: "a meating burger with a chillie suace served on a Botoga Bun", price: 15.00 },
        {day: "Thursday", burger: "The Caesar", desc: "Burger with Caesar Dressing", price: 15.00 },
        {day: "Friday", burger: "placeholder5", desc: "placeholder5", price: 15.00 },
        {day: "Saturday", burger: "The Southwestern", desc: "Fired onion with bacon and a chipotle BBQ suace", price: 15.00 },
    ],
    //ARRAY FOR ENTREES
    mains: [
        {item: "main1", entree: "Classic Cheese", desc: "It's a CheeseBurger, what did you expect?", price: 99.99, img: 'images/burgerPlaceholder.jpg'},
        {item: "main2", entree: "Bacon Me Crazy", desc: "Bacon Loaded Bacon Burger", price: 99.99, img: 'images/burgerPlaceholder.jpg'},
        {item: "main3", entree: "Patty Mayonnaise", desc: "placeholder3", price: 99.99, img: 'images/burgerPlaceholder.jpg'},
        {item: "main4", entree: "placeholde4", desc: "placeholder4", price: 99.99, img: 'images/burgerPlaceholder.jpg'},
    ],
    //RRAY FOR SIDES
    sides: [
        {item: "side1", side: "Seasoned Curlies", desc: "Cajun Seasoned Curly Fries", price: 99.99, img: ''},
        {item: "side2", side: "Sweet Spuds", desc: "Sweet Potato Fries", price: 99.99, img: ''},
        {item: "side3", side: "Classic Fry", desc: "regular fries", price: 99.99, img: ''},
        {item: "side4", side: "placeholde4", desc: "placeholder4", price: 99.99, img: ''},
    ],

}

//STAFF OBECTS!

const STAFF = {
	currentStaff: [
		{
			first: "Fiona",
			last: "Jean",
			pic: "images/fiona1.png",
			job: "Owner",
			blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			sign: "Taurus",
			likes: "Dogs, Podcasts, Nikola Tesla",
			dislikes: "Cats, TV Shows, Thomas Edison",
			fave: "Favorite thing on the menu goes here.",
		},
		{
			first: "Fionna",
			last: "Cranston",
			pic: "images/fiona3.png",
			job: "Manager",
			blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			sign: "Aries",
			likes: "Blueberries, Skateboards, Old Maps",
			dislikes: "Tennis Rackets, Coffee Mugs, Desert Sunsets",
			fave: "Favorite thing on the menu goes here.",
		},
		{
			first: "Fiohna",
			last: "Pashmina",
			pic: "images/fiona2.png",
			job: "Head Chef",
			blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			sign: "Pisces",
			likes: "Rainbows, Bicycles, Mountain Peaks",
			dislikes: "Lighthouses, Music Boxes, Wooden Spoons",
			fave: "Favorite thing on the menu goes here.",
		},
		{
			first: "Feeona",
			last: "Rolfburg",
			pic: "images/fiona5.png",
			job: "Mixologist",
			blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			sign: "Libra",
			likes: "Pocket Watches, Paper Cranes, Lanterns",
			dislikes: "Clouds, Violins, Compact Discs",
			fave: "Favorite thing on the menu goes here.",
		},
		{
			first: "Feeohnna",
			last: "Quellingham",
			pic: "images/fiona4.png",
			job: "Marketing",
			blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			sign: "Scorpio",
			likes: "Candles, Paperclips, Surfboards",
			dislikes: "Dragonflies, Notebooks, Ice Cream",
			fave: "Favorite thing on the menu goes here.",
		},
	],
};

// app.get('/public/images/BOTD', (req, res) => {
//     const today = new Date();
//     const imageName = `burger${today.getDate()}.jpg`;
//     const imagePath = path.join(__dirname, 'images/BOTD', imageName);

//     res.sendFile(imagePath)
// })


app.get('/', (req, res) => {
    const today = new Date();
    const imageName = `burger${today.getDay()}.jpg`;
    const imagePath = path.join(__dirname, 'images/BOTD', imageName);
    const BOTD = menu.burgerOTDAY[today.getDay()]

    console.log(imageName);

    res.render('home.ejs', {
        imageName,
        BOTD,
    })   
});

app.get('/menu', (req, res) =>{

    res.render('menu.ejs', {
        botdItems: menu.burgerOTDAY,
        mainItems: menu.mains,
        sideItems: menu.sides,
    })
});


app.get('/about', (req, res) =>{
    res.render('about.ejs')
});

app.get('/staff', (req, res) => {
    res.render('staff.ejs', STAFF)
})


app.get("/staff/:lastName", (req, res) => {
    const showFiona = STAFF.currentStaff.filter(
        (fiona) => fiona.last === req.params.lastName
    )[0];
    res.render("staff-show.ejs", showFiona);
});



app.get('/contact', (req, res) => {
    res.render('contact.ejs')
});

app.get('/links', (req, res) => {
    res.render('links.ejs')
});















app.listen(PORT);