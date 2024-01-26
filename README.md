# UrlShortener

[![NodeJs](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png)](https://nodejs.org/en/) [![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png)](https://reactjs.org/) [![PostgreSQL](https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/220px-Postgresql_elephant.svg.png)](https://www.postgresql.org/)



## Tech

- [node.js] - evented I/O for the backend
- [Postgres] - PostgreSQL is a powerful, open source object-relational database system with over 35 years of active
- [Express] - fast node.js network app framework
- [Sequelize] - Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more
- [ESLint] - ESLint is an open source project that helps you find and fix problems in JavaScript code.
- [markdown-it] - Markdown parser done right. Fast and easy to extend.

## Setup
- Before running the docker-compose file we need to set your current IP to enable the bakcend to communicate with the database. To do It in open docker-compose file in:
```
./docker-compose.yml
```
- change the endpoint variable 
```
 DATABASE_HOST : YOUR_IP
```
- to run the project, in the root of project run the command
```sh
  docker-compose up --build -d
```
- To seed database, inside Backend folder  run the command to install dependencies
```sh
  command npm install
```
and to seed the database
```sh
  command npx sequelize-cli db:seed:all
```
<span style="color:red;"> Important, this command will run only if there is no data on database, because each row  needs to match table ID

- the backend will start on
```sh
  http://localhost:3001
```
- Verify the deployment by navigating to your server address in
  your preferred browser.

- to stop application, in the root of project run the
```sh
  command docker-compose down
```

## Shortening an Url

- To shorten a URL, open the frontend at http://localhost:3000 and click on the "Create New Shortened URL" button, a "Shorten Url" button will open, enter the URL and click on the button
 

## Viewing the Url

- To view the correct URL, open the frontend at http://localhost:3000 and click the "View your URL" button, a "Show your URL" button will open, enter the URL and click the button
  
##  shortening algorithm
```
https://stackoverflow.com/questions/742013/how-do-i-create-a-url-shortener
```

## Critique

- Database may be a problem because it has a max number of connections.
- How this project was made with docker containers it was made to fit scaling.
