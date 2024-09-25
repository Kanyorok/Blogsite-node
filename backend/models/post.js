const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


class Post extends Model {
    // method
}

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull:false,
    },
    likes_counter: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    comments_counter: {
        type: DataTypes.INTEGER,
        defaultValue: 0, 
    }
}, {
    sequelize,
    modelName: 'Post'
})


// Associations 
Post.associate = (models) => {
    Post.belongsTo(models.User, {as: 'author', foreignKey: 'author_id'});

    Post.hasMany(models.Comment, { foreignKey: 'post_id'});
    Post.hasMany(models.Like, {foreignKey: 'post_id'});
}

Post.addHook('afterCreate', async (post)=> {
    const author = await post.getAuthor();
    if (author) {
        await author.increment('posts_counter', {by: 1})
    }
})

module.exports = Post;