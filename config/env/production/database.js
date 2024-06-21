module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', process.env.POSTGRES_DATABASE),
        user: env('DATABASE_USERNAME', process.env.POSTGRES_USER),
        password: env('DATABASE_PASSWORD', process.env.POSTGRES_PASSWORD),
      },
      debug: false,
    },
  });