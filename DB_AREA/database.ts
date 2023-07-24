import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

const sequelize = new Sequelize(
  String(process.env.DB_NAME),
  String(process.env.DB_USERNAME),
  String(process.env.DB_PASSWORD),
  {
    host: String(process.env.DB_HOST),
    dialect: "mysql",
  }
);

const dbConn = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
dbConn();
export default sequelize;
