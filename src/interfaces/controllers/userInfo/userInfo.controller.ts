/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserInfoRequestDto, UserInfoResponseDto } from '@/domain';
import { CreateUserInfo, DeleteUserInfo, GetUserInfo, PatchUserInfo } from '@/domain/usecases';
import { AuthRequest, AuthUser } from '@/interfaces/auth';
import { handleSequelizeError } from '@/server/errorHandling';
import { ApiResponse, ApiResponseStatus } from '@/types';
import { Request, Response } from 'express';
import { container, injectable } from 'tsyringe';

@injectable()
export class UserInfoController {
  async createUserInfo(req: Request<any, any, UserInfoRequestDto>, res: Response) {
    const createUserInfo = container.resolve<CreateUserInfo>('CreateUserInfo');
    let response: Partial<ApiResponse<UserInfoResponseDto, any>> = {};
    let status: ApiResponseStatus = 201;
    try {
      const responseDto = await createUserInfo.invoke(req.body);
      response = {
        status: status,
        message: 'User Info Created Successfully',
        data: responseDto,
      };
    } catch (error) {
      const errorResponse = handleSequelizeError(error);
      status = errorResponse.status;
      response = errorResponse;
    }
    res.status(status).json(response);
  }

  async getUserInfo(req: AuthRequest<any, any, any, { userId: string }>, res: Response) {
    const getUserInfo = container.resolve<GetUserInfo>('GetUserInfo');
    let response: Partial<ApiResponse<UserInfoResponseDto, any>> = {};
    let status: ApiResponseStatus = 200;
    try {
      const authUser: AuthUser | undefined = req.user;
      const userId = parseInt(req.query.userId);
      if (authUser && authUser.id === userId) {
        const responseDto = await getUserInfo.invoke(userId);
        if (responseDto !== null) {
          response = {
            status: status,
            message: 'User Info Retrieved Successfully',
            data: responseDto,
          };
        } else {
          status = 422;
          response = {
            status: status,
            message: `No such user found for ${userId}`,
            data: null,
          };
        }
      } else {
        status = 422;
        response = {
          status: status,
          message: `No such user found for ${userId}`,
          data: null,
        };
      }
    } catch (error) {
      const errorResponse = handleSequelizeError(error);
      status = errorResponse.status;
      response = errorResponse;
    }
    res.status(status).json(response);
  }

  async patchUserInfo(
    req: AuthRequest<{ userId: string }, any, UserInfoRequestDto>,
    res: Response
  ) {
    const patchUserInfo = container.resolve<PatchUserInfo>('PatchUserInfo');
    let response: Partial<ApiResponse<UserInfoResponseDto, any>> = {};
    let status: ApiResponseStatus = 200;
    try {
      const authUser: AuthUser | undefined = req.user;
      const userId = parseInt(req.params.userId);
      if (authUser && authUser.id === userId) {
        const responseDto = await patchUserInfo.invoke(userId, req.body);
        if (responseDto !== null) {
          response = {
            status: status,
            message: 'User Info Updated Successfully',
            data: responseDto,
          };
        } else {
          response = { status: status, message: 'No Changes Applied' };
        }
      } else {
        response = { status: status, message: 'No Changes Applied' };
      }
    } catch (error) {
      const errorResponse = handleSequelizeError(error);
      status = errorResponse.status;
      response = errorResponse;
    }
    res.status(status).json(response);
  }

  async deleteUserInfo(req: AuthRequest<{ userId: string }, any, any>, res: Response) {
    const deleteUserInfo = container.resolve<DeleteUserInfo>('DeleteUserInfo');
    let response: Partial<ApiResponse<UserInfoResponseDto, any>> = {};
    let status: ApiResponseStatus = 200;
    try {
      const authUser: AuthUser | undefined = req.user;
      const userId = parseInt(req.params.userId);
      if (authUser && authUser.id === userId) {
        const deleted = await deleteUserInfo.invoke(userId);
        if (deleted) {
          response = {
            status: status,
            message: 'User Info Deleted Successfully',
          };
        } else {
          response = {
            status: status,
            message: 'Unable To Delete User Info',
          };
        }
      } else {
        response = {
          status: status,
          message: 'Unable To Delete User Info',
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
