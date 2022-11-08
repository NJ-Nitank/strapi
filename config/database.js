const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "ec2-52-207-90-231.compute-1.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "dq0e9toupnd0m"),
      user: env("DATABASE_USERNAME", "sgcxbnczanejzi"),
      password: env("DATABASE_PASSWORD", "f84c75f147e71b957e60cb60e4f79498fffc973b760c8b21e383544698f60af7"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
