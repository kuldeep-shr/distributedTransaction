import { Request, Response } from "express";
import { successApiResponse, errorApiResponse } from "../helper/utils";
// import Food from "../model/Food";
import Packet from "../model/Packet";
import sequelize from "../../../DB_AREA/database";

export const reservedFoodPacket = async (req: Request, res: Response) => {
  const selectedFoodId = req.params.id ? req.params.id : 1;

  // full transaction methond
  const transaction = await sequelize.transaction();

  try {
    const getFood = await Packet.findAll({
      where: {
        is_reserved: 0, // is_reserved false
        food_id: selectedFoodId, // foodId
        order_id: null,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      limit: 1,
      transaction,
    });
    const refinedData: any = getFood[0];

    if (!refinedData) {
      errorApiResponse(res, "Food is not available at the moment");
    }

    refinedData.is_reserved = true;
    await refinedData.save({
      transaction,
      silent: true,
    });

    await transaction.commit();
    return successApiResponse(
      { message: "Food Packet reserved successfully", data: refinedData },
      res
    );
  } catch (error) {
    await transaction.rollback();
    return errorApiResponse(res, "");
  } finally {
    await sequelize.close();
  }
};

export const bookedFoodPacket = async (req: Request, res: Response) => {
  const getOrderId = req.query.id; //uuid generated

  const selectedFoodId = req.query.selectedFoodId;
  // full transaction methond
  const transaction = await sequelize.transaction();

  try {
    const getFood = await Packet.findAll({
      where: {
        is_reserved: 1, // is_reserved false
        food_id: selectedFoodId, // foodId
        order_id: null,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      limit: 1,
      transaction,
    });

    const refinedData: any = getFood[0];

    if (!refinedData) {
      errorApiResponse(res, "Food is not available at the moment");
    }

    refinedData.is_reserved = true;
    await refinedData.save({
      transaction,
      silent: true,
    });

    await transaction.commit();
    return successApiResponse(
      { message: "Food Packet reserved successfully", data: refinedData },
      res
    );
  } catch (error) {
    await transaction.rollback();
    return errorApiResponse(res, "");
  } finally {
    await sequelize.close();
  }
};
