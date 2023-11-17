// Mover el código del evento click al archivo script.js
var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function() {
    console.log('click!!!');
});

app.use(express.static('public', {
    setHeaders: (res, path) => {
      if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'text/javascript');
      }
    }
  }));
  

//importa esto en el index.html
//
