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
  players: {
    host: 'localhost',
    port: 5010,
    protocol: 'http',
  },
  games: {
    host: 'localhost',
    port: 5005,
    protocol: 'http',
  },
  server: {
    port: 5000,
  },
  session: {
    secret: 'darth jarjar',
  },
};
