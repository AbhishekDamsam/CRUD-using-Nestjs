require('dotenv').config();

export default () => ({
    database: {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true, //shouldn't be used in production - otherwise you can lose production data.
      migrationsRun: process.env.NODE_ENV !== 'local',
    },
  });