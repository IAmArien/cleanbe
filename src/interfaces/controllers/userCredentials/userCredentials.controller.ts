/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsRequestDto, UserCredentialsResponseDto } from '@/domain';
import { CreateUserCredential, DeleteUserCredential } from '@/domain/usecases';
import { AuthRequest, AuthUser } from '@/interfaces/auth';
import { handleSequelizeError } from '@/server/errorHandling';
import { ApiResponse, ApiResponseStatus } from '@/types';
import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';

@injectable()
export class UserCredentialsController {
  async createUserCredential(req: Request<any, any, UserCredentialsRequestDto>, res: Response) {
    const createUserCredential = container.resolve<CreateUserCredential>('CreateUserCredential');
    let response: Partial<ApiResponse<UserCredentialsResponseDto, any>> = {};
    let status: ApiResponseStatus = 201;
    try {
      const responseDto = await createUserCredential.invoke(req.body);
      response = {
        status: status,
        message: 'User Credentials Created Successfully',
        data: responseDto,
      };
    } catch (error) {
      const errorResponse = handleSequelizeError(error);
      status = errorResponse.status;
      response = errorResponse;
    }
    res.status(status).json(response);
  }

  async deleteUserCredential(req: AuthRequest<{ userId: string }, any, any>, res: Response) {
    const deleteUserCredential = container.resolve<DeleteUserCredential>('DeleteUserCredential');
    let response: Partial<ApiResponse<UserCredentialsResponseDto, any>> = {};
    let status: ApiResponseStatus = 200;
    try {
      const authUser: AuthUser | undefined = req.user;
      const userId = parseInt(req.params.userId);
      if (authUser && authUser.id === userId) {
        const deleted = await deleteUserCredential.invoke(userId);
        if (deleted) {
          response = {
            status: status,
            message: 'User Credentials Deleted Successfully',
          };
        } else {
          response = {
            status: status,
            message: 'Unable To Delete User Credential',
          };
        }
      } else {
        status = 400;
        response = {
          status: status,
          message: 'Unable To Delete User Credential',
        };
      }
    } catch (error) {
      const errorResponse = handleSequelizeError(error);
      status = errorResponse.status;
      response = errorResponse;
    }
    res.status(status).json(response);
  }
}
