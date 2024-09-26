const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Post = require('./post');

class Like extends Model {}

Like.init({
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'Like',
    timestamps: true,
    hooks: {
        afterSave: async(like, options) => {
            const post = await Post.findByPk(like.post_id);
            if (post) {
                const likesCount = await Like.count({where: {post_id: post.id}});
                post.likes_counter = likesCount;
                post.save();
            }
        }
    }
});

Like.associate = (models) => {
    Like.belongsTo(models.User, {foreignKey: 'user_id', as: 'author'});
    Like.belongsTo(models.Post, {foreignKey: 'post_id'});
};

module.exports = Like;