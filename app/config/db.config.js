module.exports = {
  HOST: "ep-dry-hat-augmw59w-pooler.c-10.us-east-1.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_jxz0nUWfX7Fi",
  DB: "neondb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
};

