const express = require('express');
const app = express();

const projectsInfo = require('./data.json');

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    console.log(projectsInfo)
    res.render('index', projectsInfo);
});

app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('project/0', (req, res) => {
//     res.render('project',  {projectsInfo}[0] )
// })

// app.get('/project/:id', function(req, res) {
//     const projectId = req.params.id;
//
//     if (projectId < projectsInfo.length) {
//         const project = projectsInfo.find( ({ id }) => id === +projectId );
//         res.render('project', { project });
//     } else {
//         res.sendStatus(404);
//     }
// });

app.listen(3000, () => {
    console.log('The app is running on localhost:3000!')
});