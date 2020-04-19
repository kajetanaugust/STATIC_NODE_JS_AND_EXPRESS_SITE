## Static Node and Express Site

This is my unit 6 project of Full Stack Javascript Techdegree.
It's the portfolio website created using Node.js, Express and Pug(Jade) template.

I've created the files: data.json, which contains information about all of my projects, 
included in this portfolio, app.js file including the routing, static route settings, 
error handlers, localhost server settings and logic behind the site.

The site uses the JSON file to get the display the information about my projects along 
with the print screens of the projects. It consists of index, about, project and error page.
 
The Project page gets the index number from url and renders the chosen project. 
If a user navigates to non existing site the error page is displayed containing error message, 
error code, and the error stack.

To start the project: use the **npm install** to download and install all the dependencies, 
needed for running the project, then use **npm start** to start the localhost server.


CSS Changes:
- New font - Merriweather
- Changed info section color
- Changed colors and sizes of font in info section
- Transition added to project thumbnails
- Border radius changed for all the thumbnails


