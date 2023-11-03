const express = require('express');
const app = express(); //objet

// Setting up a basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});// this is a midelware of 

// Starting the server on port 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

  

 