const User = require('./User');
const Post = require('./Post');

// post defines the post model, user defines the user model, index imports both and defines their link/connection/assossiation
// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Post };