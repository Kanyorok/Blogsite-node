const sequelize = require('./sequelize');

// Synchronize all the models/tables to the db
sequelize.sync({force: true})
.then(() => {
    console.log('Database and tables created successfuly!');
})
.catch(err => {
    console.error('There was an error creating the database!', err);
});