

var route = function(app){
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/booking', (req, res) => {
        res.render('booking');

    });
    
}

module.exports = route;