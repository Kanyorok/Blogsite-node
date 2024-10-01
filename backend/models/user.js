const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const sequelize = require('../config/sequelize');

class User extends Model {
    // Define instance method for the class
    async recentPosts() {
        return await this.getposts({
            order: [['createdAt', 'DESC']],
            limit: 5
        })
    }

    getJwToken() {
        return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_TIME
        });
    }

    async comparePassword(enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.Password);
    }

}

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Please enter a valid email'
            },
            notEmpty: {
                msg: 'Please enter email to proceed.'
            }
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter your name',
            },
            len: {
                args: [0, 100],
                msg: 'Your name cannot exceed 100 characters'
            }
        }
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Bio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter your name',
            },
            len: {
                args: [0, 500],
                msg: 'Your bio cannot exceed 500 characters'
            }
        }},
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Please enter your password'
            },
            len: {
                args: [8, undefined],
                msg: 'Your password must be longer than 8 characters'
            }
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    posts_counter: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
}, {sequelize,
    modelName: 'User',
    hooks: {
        beforeCreate: async (user) => {
            //Hash password before save user
            if(user.Password) {
                user.Password = await bcrypt.hash(user.Password, 10)
            }
        }
       

    }
});



  //Associations
  User.associate = (models) => {
      User.hasMany(models.Comment, {foreignKey: 'user_id'});
      User.hasMany(models.Post, {foreignKey: 'author_id', sourceKey: 'id'});
      User.hasMany(models.Like, {foreignKey: 'user_id'});
  }


  module.exports= User;