var http = require('http');
var path = require('path');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

// App initialization
var app = express();
app.use(logger('dev'));

// Set up the view engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Make our 'database' of guestbook entries
var entries = [];
app.locals.entries = entries;

// Set up the PUT body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use('/build', express.static(__dirname + '/build'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/new-entry', (req, res) => {
    res.render('new-entry');
});

app.post('/new-entry', (req, res) => {
    if (!req.body.title || !req.body.content) {
        res.statu(400).send('Entries must have a title and content.');
        return;
    }

    // Good entry; push it onto 'database' array and go back home
    entries.push({
        title: req.body.title,
        content: req.body.content,
        published: new Date()
    })
    res.redirect('/');
});

app.use((req, res) => {
    res.status(404).render('404');
});

http.createServer(app).listen(3000, () => {
    console.log('Guestbook app started on port 3000.');
});
