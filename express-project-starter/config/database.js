const {
  db: { username, password, database, host },
} = require('./index');

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    logging: false
  },
  production: {
    use_env_variable: 'postgres://bfdkazstkdtquu:b5056bed0ef2bc33c345b5e63615712486cb4fab9911504d943d70bfb36e7fcb@ec2-107-22-245-82.compute-1.amazonaws.com:5432/d99rqfknah1sr9',
    dialect: 'postgres',
    seederStorage: 'sequelize'
  }
};
