# TDD Authenticator to user login

Authenticator to user login and validation of user with Jest, Factory Girl, Faker, Supertest, Sequelize, JWT, BCrypt and etc.

## Getting Started

This project build with yarn.

To install all dependencies, you need to do this command:

```
yarn init
```

When you finally install all dependencies, you will need to link your app with a database.

## Database 

In this case, I create a container with Docker of a postgreSQL image.

* [How to create a PostgreSQL image with Docker](https://medium.com/better-programming/connect-from-local-machine-to-postgresql-docker-container-f785f00461a7) - A simple How To to get you up and running with Docker

After this, you can able to run your migration in our database.

## Running the tests

So, when finishes the configs about database and structures, you can run the tests with this command:

```
yarn test
```

I left it configured the tests with a unit tests and the table of code coverage, for me its more util. You can configure your preferences in jest.config.js

When you finish a build test structure with the appropriate settings, you have a terminal return like this:

![my print](https://github.com/Henriqueediniz/authTDD/blob/develop/print/Screen%20Shot%202019-07-12%20at%2023.26.22.png?raw=true)

# Author

* **Henrique Diniz** - *HDz tech* - [LinkedIn](https://www.linkedin.com/in/henriquediniz94/)







