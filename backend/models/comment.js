const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Post = require('./post');
const User = require('./user');

class Comment extends Model {}

Comment.innit({
    text: {
        type: DataTypes.TEXT,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: 'Comment cannot be empty'
            }
        }
    },
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
    modelName: 'Comment',
    timestamps: true,
    hooks: {
        afterSave: async(comment, options) => {
            const post = await Post.findByPk(comment.post_id);
            if (post) {
                const commentsCount = await Comment.count({where: {post_id: post.id}});
                post.comments_counter = commentsCount;
                post.save();
            }
        }
    }
});

Like.associate = (models) => {
    Like.belongsTo(models.User, {foreignKey: 'user_id'});
    Like.belongsTo(models.Post, {foreignKey: 'post_id'});
};

module.exports = Comment;