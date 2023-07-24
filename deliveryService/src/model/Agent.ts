import { Model, DataTypes } from "sequelize";
import sequelize from "../../../DB_AREA/database";

class DeliveryAgent extends Model {
  public id!: number;
  public is_reserved!: boolean;
  public order_id!: string;
}

DeliveryAgent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    is_reserved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    tableName: "delivery_agent",
    timestamps: false,
  }
);

export default DeliveryAgent;
