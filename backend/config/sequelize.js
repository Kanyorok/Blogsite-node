const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog_site', 'root', 'MySql@._2006', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

// Show that sequelize connection was established 
sequelize.authenticate()
.then(() => {
    console.log('Sequelize connection successfully established');
    
})
.catch(err => {
    console.error('Sequelize: was unable to connect database: ', err);
});

module.exports = sequelize;