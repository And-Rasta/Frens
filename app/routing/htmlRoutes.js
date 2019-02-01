const path = require('path');

module.exports = ((app) => {
    
    // Survey route
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    // Index route
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });

});