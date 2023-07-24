import { Model, DataTypes } from "sequelize";
import sequelize from "../../../DB_AREA/database";

class FoodService extends Model {
  public id!: number;
  public name!: string;
}

FoodService.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "food_service",
    timestamps: false,
  }
);

export default FoodService;
