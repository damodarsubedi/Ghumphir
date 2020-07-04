

var route = function(app){
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/booking', (req, res) => {
        res.render('booking');

    });

    //landing page
    app.get('/landing', (req, res) => {
        res.render('landing');

    });

    //booking post request

    app.post('/booking', (req, res) => {

    } );
    
}

module.exports = route;