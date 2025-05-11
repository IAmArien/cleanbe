/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsRequestDto, UserCredentialsResponseDto } from "@/domain";
import { CreateUserCredential } from "@/domain/usecases";
import { handleSequelizeError } from "@/server/errorHandling";
import { ApiResponse, ApiResponseStatus } from "@/types";
import { Request, Response } from "express";
import { container, injectable } from "tsyringe";

@injectable()
export class UserCredentialsController {

  async createUserCredential(req: Request<any, any, UserCredentialsRequestDto>, res: Response) {
    const createUserCredential = container.resolve<CreateUserCredential>("CreateUserCredential");
    let response: Partial<ApiResponse<UserCredentialsResponseDto, any>> = {};
    let status: ApiResponseStatus = 201;
    try {
      const responseDto = await createUserCredential.invoke(req.body);
      response = {
        status: status,
        message: "User Created Successfully",
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
