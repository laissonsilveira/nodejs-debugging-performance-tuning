const connection = process.env.NODE_ENV === 'production'
  ? {
    host: 'us-cdbr-east-04.cleardb.com?reconnect=true',
    port: '3306',
    user: 'bc0ee671a70f6c',
    password: 'fedc4a4b',
    database: 'heroku_7ebab73c6c36ee2',
  }
  : {
    host: '127.0.0.1',
    port: '33306',
    user: 'root',
    database: 'rps',
  };
module.exports = {
  database: {
    client: 'mysql',
    connection,
    migrations: {
      tableName: '_knex_migrations',
    },
  },
  server: {
    port: 5010,
  },
};
