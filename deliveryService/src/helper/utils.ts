import { Response } from "express";
const successApiResponse = (argu: any, res: Response) => {
  res.status(200).json({
    statusCode: 200,
    isError: false,
    mssg: argu.message ? argu.message : "success",
    data: argu.data ? argu.data : [],
  });
};

const errorApiResponse = (res: Response, message: string): void => {
  res.status(200).json({
    statusCode: 400,
    isError: true,
    mssg: message ? message : "something went wrong",
    data: [],
  });
};

export { successApiResponse, errorApiResponse };
