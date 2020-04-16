const express = require('express');
const app = express();
app.use('/static', express.static('public'));
const { projectsInfo } = require('./data.json');

app.set('view engine', 'pug');


app.get('/', function(req, res) {
    res.render('index', { data });
});

app.get('/about', function(req, res) {
    res.render('about');
});

// app.get('project/0', function(req, res) {
//     res.render('project',  projectsInfo[0] )
// })

app.get('/project/:id', function(req, res) {
    const projectId = req.params.id;
    const project = projectsInfo.find( ({ id }) => id === +projectId );
    if (project) {
        res.render('project', { project });
    } else {
        res.sendStatus(404);
    }
});

app.listen(3000, () => {
    console.log('The app is running on localhost:3000!')
});