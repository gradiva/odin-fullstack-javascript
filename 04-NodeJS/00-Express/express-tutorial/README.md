# README

##  Basic Informational Site

[*Express tutorial*](https://www.theodinproject.com/courses/nodejs/lessons/express-101)
following The Odin Project [NodeJS](https://www.theodinproject.com/courses/nodejs).

This project is based on the [MDN Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website) tutorial.

## Notes

1. Created a skeleton website project for the Local Library and verified that it runs using node - understand how the project is structured, to get a good idea where to make changes to add routes and views for the local library.

2. Learned a bit about databases and ORMs on Node/Express, and a lot about how Mongoose schema and models are defined. We then used this information to design and implement Book, BookInstance, Author and Genre models for the LocalLibrary website.

3. Created all the routes for the site, along with dummy controller functions that can be populated with a full implementation in later articles. Learned a lot of fundamental information about Express routes, and some approaches for structuring our routes and controllers.

4. Created all the "read-only" pages for THE site: a home page that displays counts of instances of each of our models, and list and detail pages for our books, book instances, authors, and genres. Along the way, gained a lot of fundamental knowledge about controllers, managing flow control when using asynchronous operations, creating views using Pug, querying the database using our models, how to pass information to a template from your view, and how to create and extend templates. Learned a little about date handling using moment.

5. Express, node, and third-party packages on NPM provide everything that is needed to add forms to a website. Learned how to create forms using Pug, validate and sanitize input using express-validator, and add, delete, and modify records in the database.

6. Learned how to use gzip/deflate compression for responses and Helmet to protect against well known vulnerabilities.

## Run

1. `npm install`
2. `npm run start` starts the server
3. `npm run start:debug` starts the server and enables console logging/debugging 
4. `npm run devstart` starts and monitors the server

## View in browser

To view in browser click [here](https://still-everglades-64247.herokuapp.com/).