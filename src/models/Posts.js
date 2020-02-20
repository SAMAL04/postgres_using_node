const Sequelize = require("sequelize");
const BlogDB = require("../config/BlogDB");

const Post = BlogDB.define("post", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  visible: Sequelize.BOOLEAN,
  authorId: Sequelize.INTEGER
});

const PostSync = ({ force = false } = { force: false }) => {
  Post.sync({ force })
    .then(() => {
      const testPost = {
        title: "sample post",
        content: "My first blog post",
        visible: false
      };

      Post.create(testPost)
        .then(result => {
          console.log(result.get());
        })
        .catch(console.error);
    })
    .catch(console.error);
};

exports.Post = Post;
exports.PostSync = PostSync;
