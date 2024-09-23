const dotenv = require('dotenv');
const app = require('./app');
const connectDatabase = require('./config/database');
const sequelize = require('./config/sequelize');

// Set up the config file
dotenv.config({ path: 'backend/config/config.env'})

connectDatabase();
sequelize.sync();

app.listen(process.env.PORT, ()=> {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})
