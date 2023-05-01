# ProjectTrace-Backend
the backend for project trace


To use this simple clone the repository and run:

npm install

node index.js

The project requires the creation of a .env file located in the root directory which should export:

PORT = 
PGPORT = 
POSTGRES_URI = 
DATABASE = 
PASSWORD = 
PGUSER = 

A database will need to be created with similar table names.Otherwise the front and backend api calls must be changed to match the new tables and columns.

# How to test

run the command:

npm test -- tests/db_api.test.js
