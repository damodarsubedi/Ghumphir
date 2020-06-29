

var route = function(app){
    
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.post('/login', (req, res) => {
        
        res.send('Login');
    });
    app.get('/signup', (req, res) => {
        
        res.render('signup');
    });
    app.post('/signup', (req, res) => {
        console.log(req.body); 
        res.render('signup');
    });
}

module.exports = route;