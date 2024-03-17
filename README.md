# NodeJS sample MVC Rest Backend
Using Sequelize as ORM and express framework.

## Getting Started

Create a .env file in the root folder, you can use .env.example as the 

### Installing
Install Latest Version Npm & Node js

To start use
```
npm install
```
then use
```
npm run dev
```

Configure Database Setting
- config/config.json
- create .env from sample .env.example 

Run Migration & Seeder
```
sequelize db:migrate
sequelize db:seed:all
```