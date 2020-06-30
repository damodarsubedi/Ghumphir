

var route = function(app){
    
    app.get('/', (req, res) => {
        res.render('login');
    });

    app.post('/', (req, res) => {
        if(req.body.idToken){
            
        }
        else{
            res.send({msg: req.body.message});
        }
    });
    app.get('/signup', (req, res) => {
        
        res.render('signup');
    });
    app.post('/signup', (req, res) => {
        res.render('signup');
    });

    app.get('/registerHotel', (req, res) => {
        
        res.render('registerHotel');
    });
    app.post('/signup', (req, res) => {
        console.log(req.body); 
        res.render('signup');
    });

    app.get('/users/home', (req, res) => {
        res.render('home')
    });

    app.get('/hotel/home', (req, res) => {
        res.render('hotelHome')
    });
}

module.exports = route;