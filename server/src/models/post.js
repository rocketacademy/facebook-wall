export default function (sequelize, DataTypes) {
  const Post = sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    poster: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  })
  return Post
}
