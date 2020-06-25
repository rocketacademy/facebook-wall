export default function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  avatarurl: DataTypes.STRING,
  })
  return User;
}
