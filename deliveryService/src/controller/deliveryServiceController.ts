import { Request, Response } from "express";
import { successApiResponse, errorApiResponse } from "../helper/utils";
import DeliveryAgent from "../model/Agent";
import sequelize from "../../../DB_AREA/database";
// import { getDeliveryAgent } from "../model/Agent";

export const reservedDeliveryAgent = async (req: Request, res: Response) => {
  // full transaction methond
  const transaction = await sequelize.transaction();

  try {
    const reserveAgent = await DeliveryAgent.findAll({
      where: {
        is_reserved: 0,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      limit: 1,
      transaction,
    });
    const refinedData: any = reserveAgent[0];

    if (!refinedData) {
      errorApiResponse(res, "Agent is not available at the moment");
    }
    if (refinedData.is_reserved) {
      errorApiResponse(res, "Agent is already booked");
    }
    refinedData.is_reserved = true;
    await refinedData.save({
      transaction,
      silent: true,
    });
    await transaction.commit();
    return successApiResponse(
      { message: "Agent reserved successfully", data: refinedData },
      res
    );
  } catch (error) {
    await transaction.rollback();
    return errorApiResponse(res, "");
  } finally {
    await sequelize.close();
  }
};
