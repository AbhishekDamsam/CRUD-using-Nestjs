

## Description

REST APIs for Customers photovoltaic installation and ordering solar components like Panles, batteries and other components.
Constraint: Only one component can be order as of now.

Task: Product REST API for PV-Projects

We provide a complete service around our customers photovoltaic installation, starting with the installation of the solar panels (modules), batteries and other components. These components need to be ordered ahead of time from the manufacturer.
You task is writing a REST service using Nest.js and a SQL Database (like PostgreSQL) that provides CRUD APIs for:
· Projects with a planned construction date and a customer ID.
· Products which can either be modules (solar panels) or batteries.

Additionally, the API must support ordering the required products for the customer’s project. The ordered products might change after the initial planning of the project.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# build
$ npm run build

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Information

* After installing npm modules and and the build it.
* Currently there is a support of only one component type can be ordered in one transaction.
* I have used docker image to create postgres database. Install docker and execute the below commands.
  1. docker run -d --name postgres-dev -e POSTGRES_PASSWORD=pass1234 -v ${HOME}/postgres-data/:/var/lib/postgresql/data -p 5432:5432 postgres:alpine
  2. docker start postgres-dev

* If no docker then provide the postgres server details and update the configurations in src/config/configuration.ts file.
* Four endpoints GET (http://localhost:3000/project/{id}), POST (http://localhost:3000/project with body), PUT (http://localhost:3000/project/{id} with body)
  and DELETE on http://localhost:3000/project/{id}.

* Post body example { "customerId": 3, "constructionDate": "2023-10-23", "productId": 1, "count": 10 }
* Put body example { "orderDate": "2022-07-03", "productId": 1, "count": 12 }
* The fields, customerId, count can be any number. ProductId must be from 1,2,3 which is equivalent to Enum(~/enum.ts) values in this project.
* The constructionDate and orderDate must be in 'YYYY-MM-DD' format.
* There is a scope for adding OneToMany relationship of Project & SolarComponents. Saving data in their respective repositories, retrieving in relations.
* Scope for adding tests using Jest and Supertest.
* Scope for adding Logging functionality.