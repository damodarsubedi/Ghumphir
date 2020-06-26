

var route = function(app){
    app.get('/', (req, res) => {
        res.render('home');
    });
}

module.exports = route;