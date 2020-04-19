const express = require('express');
const bodyParser = require('body-parser');
const app = express(); //setting app to express
app.use(bodyParser.urlencoded({extended:false}));
const { projects } = require('./data.json'); //getting json data

app.use('/static', express.static('public')); //setting static route
app.set('view engine', 'pug'); //setting view engine

app.get('/', (req, res) => { //setting route for index
    res.render('index', {projects}); //rendering index
});

app.get('/about', (req, res) => { //setting route for about
    res.render('about'); //rendering about
});

app.get('/project/:id', (req, res, next) => { //setting route for projects
    const projectId = req.params.id; //getting id from url

    if (projectId < projects.length) { //checking if projectId is lower number than the length of projects array
        const project = projects.find( ({ id }) => id === +projectId ); //finding the project that matches projectId
        res.render('project', { project }); //rendering the project
    }
    else {
        let err = new Error('Project not found!'); //creating new error
        err.status =`Error ${404}`; //setting error status
        next(err); //passing err to next middleware
    }
});

app.use((req, res, next) => { //
    const err = new Error('Page not found!') //creating new error
    err.status = `Error ${404}`; //setting error status
    next(err) //passing err to next middleware
});

app.use((err, req, res, next) => {
    res.locals.error = err; //setting error
    console.log(`${err.status} ${err.message}`) //logging status and message to the console
    console.log(`${err.stack}`) //logging error stack to the console
    res.render('error') //rendering error page
});


app.listen(3000, () => { //setting localhost
    console.log('The app is running on localhost:3000!') //loging message to the console
});