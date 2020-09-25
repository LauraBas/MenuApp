# AdFoodio

AdFoodio is a Menu app made with React, Node Express and MySql, that lets the user order food, drinks and desserts, and notifies them when it's ready for pickup.

## Getting Started

1. clone the git repository to your local machine.
2. run `npm install` to download all necessary dependencies.
3. run `cd frontend` && run `npm start` to run a local version of the website on your machine.
4. run `cd api` && run `npm start` to run the data base.
5. navigate to 'localhost:3000' to view the app.
6. run `npm run test` to run the unit tests.

## Structure

The backend is a node/express server which runs on port 4848.
The frontend uses React and Typescript.
Material UI was used for general stylings.
The tests use Chai and Mocha.

## Comments
I couldn't connect mysql with docker so I decided to retrieve the data on local instead of using the data base. Although I commented the code that I wrote before, so you can read it. 


## Questions

* What would you improve with your code?
I would like to have greater test coverage, not only the logic of the functions, but also the main React smart Component. I also would like to improve the code organization, making smaller functions and better isolated classes.

* How would you scale your code for more users?
Although I don't have experience with this type of optimization, from my research I would consider multiple server instances with a load balancer.

* What general patterns did you use to structure your code?
I used the smart/dumb component pattern.

* Is there anything you think we should change about this test?
No, for me it was a great challenge and a very enjoyable excercise!