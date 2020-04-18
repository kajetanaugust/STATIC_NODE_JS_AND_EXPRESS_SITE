const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
const { projects } = require('./data.json');

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {projects});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project/:id', (req, res, next) => {
    const projectId = req.params.id;

    if (projectId < projects.length) {
        const project = projects.find( ({ id }) => id === +projectId );
        res.render('project', { project });
        next();
    }
    else {
        let err = new Error('Project not found!');
        err.status =`Error ${404}`;
        next(err);
    }
});

app.use((req, res, next) => {
    const err = new Error('Page not found!')
    err.status = `Error ${404}`;

    next(err)
});



app.use((err, req, res, next) => {
    res.locals.error = err;
    console.log(`${err.status} ${err.message}`)
    console.log(`${err.stack}`)
    res.render('error')
});

//exceeds expectations

//readme


app.listen(3000, () => {
    console.log('The app is running on localhost:3000!')
});