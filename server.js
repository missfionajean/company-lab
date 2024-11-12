const express = require('express')
const app = express()

// setting up morgan for better HTTP logging
/* remember this is middleware that must be installed */
const morgan = require("morgan");
app.use(morgan("dev"));

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public')); 

const PORT = 3000;

app.get('./home', (req, res) => {
    console.log('Test');
    
})























app.listen(PORT);