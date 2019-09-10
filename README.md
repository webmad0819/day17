## How to install express

`npm i express` and then run it via `nodemon web-server.js`

## How to run the nodejs conversion server

In order to run the nodejs conversion server please issue 

`node server.js`

That will create for you a `moviesClean.json` file mapping the rate values from string to number.

## Mongo import

In order to import all the movies into the database, please issue the following command:

`mongoimport --db webmad0819 --collection movies --jsonArray moviesClean.json`

After that you should see the webmad0819 db and inside the movies collection so you can query to it.

Don't forget to look into the server.js node file to understand it!