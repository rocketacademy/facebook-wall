export default function (sequelize, DataTypes) {
  const Comment = sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    postid: DataTypes.INTEGER,
    poster: DataTypes.STRING,
    content: DataTypes.STRING,
  })
  return Comment
}
