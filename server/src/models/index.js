import Sequelize from 'sequelize'

// Default credentials for local setup.
const config = {
  database: 'facebookwall',
  username: 'postgres',
  password: 'postgres',
  dialect: 'postgres',
  port: 5432,
}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

const db = {
  posts: sequelize.import('./post'),
  users: sequelize.import('./user'),
  comments: sequelize.import('./comment'),
  sequelize: sequelize,
  Sequelize: Sequelize,
}

Object.keys(db).forEach((model) => {
  if ('associate' in db[model]) {
    db[model].associate(db)
  }
})

export default db
