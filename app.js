const express = require('express');
const app = express(); //objet
const path = require('path');


// Setting up a basic route
// this is the midalware of the app
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/index.html'));
});

// Starting the server on port 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

  

 