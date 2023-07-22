# back-end capestone project
# get Youtube Subscribers
This is a Node, Express app to getting details of youtube subscribers.

There are four API endpoints in this app
1 - "/ "

2 - "/subscribers "

3 - "/subscribers/names "

4 - "/subscribers/:id "

1 - "/ " default route.
when app start this default route will render index.html file.

e.g. ==> http://localhost:300/

2 - "/subscribers " route.
When user go to this route it will returns an array of object. It will response with an array of subscribers object.

e.g. ==> http://localhost:300/subscribers

3 - "/subscribers/names " route
When user go to this route it will returns an array of object. It will response with an array of object with only Subscribers name and Subscribers Channel.

e.g. ==> http://localhost:300/subscribers/names

4 -"/subscribers/:id " route
When user go to this route it will returns an object of subscriber. It will response with a subscriber object with given id, ans also response with status code 400. If user enter wrong id or enter nothing it will give response with error messege.

e.g ==> http://subscribers/id

if user enter wrong id, messege will be { messege : "Sorry....! You enter wrong ID, No such subscriber found in this ID."}

# libraries use in this app

cors

 dotenv
 
 express
 
 mochawesome
 
 mongoose
 
 nodemon
 
 supertest
 
 nodemon 

 # Available Scripts
 npm start
It will start the server index.js file

npm run dev
It will start developent server using nodemon.

npm run createDB
It will create database using data.js file , This command works only if user have mongodb install in there local system.

npm test
It will run the subscribers.test.js file to test the all testcases.



 



