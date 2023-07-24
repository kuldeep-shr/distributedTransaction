import { Model, DataTypes } from "sequelize";
import sequelize from "../../../DB_AREA/database";

class OrderHistory extends Model {
  public id!: number;
  public is_reserved!: boolean;
  public order_id!: string;
}

OrderHistory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_reserved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "order_history",
    timestamps: false,
  }
);

export default OrderHistory;
