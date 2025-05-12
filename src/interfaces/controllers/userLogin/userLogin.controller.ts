/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserLoginRequestDto, UserLoginResponseDto } from "@/domain";
import { LoginUser } from "@/domain/usecases";
import { handleSequelizeError } from "@/server/errorHandling";
import { ApiResponse, ApiResponseStatus } from "@/types";
import { Request, Response } from "express";
import { container, injectable } from "tsyringe";

@injectable()
export class UserLoginController {

  async login(req: Request<any, any, UserLoginRequestDto>, res: Response) {
    const loginUser = container.resolve<LoginUser>("LoginUser");
    let response: Partial<ApiResponse<UserLoginResponseDto, any>> = {};
    let status: ApiResponseStatus = 200;
    try {
      const responseDto = await loginUser.invoke(req.body);
      response = {
        status: status,
        message: "User Authenticated Successfully",
        data: responseDto
      };
    } catch (error) {
      const errorResponse = handleSequelizeError(error);
      status = errorResponse.status;
      response = errorResponse;
    }
    res.status(status).json(response);
  }
}
