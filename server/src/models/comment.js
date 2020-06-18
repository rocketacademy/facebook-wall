export default function (sequelize, DataTypes) {
  const Comment = sequelize.define('comment', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    postId: DataTypes.INTEGER,
    owner: DataTypes.INTEGER,
    content: DataTypes.STRING,
  })
  return Comment
}
