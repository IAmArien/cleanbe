/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { toUserInfo, toUserInfoResponseDto, UserInfoModel, UserInfoRequestDto, UserInfoResponseDto } from "@/domain";
import { injectable } from "tsyringe";

@injectable()
export class UserInfoRepository {

  createUserInfo(userInfo: UserInfoRequestDto) {
    return new Promise<UserInfoResponseDto>(
      async (resolve, reject) => {
        try {
          const info = toUserInfo(userInfo);
          const model = await UserInfoModel.create(info);
          const response = toUserInfoResponseDto(model);
          resolve(response);
        } catch (error) {
          reject(error);
        }
      }
    );
  }

  getUserInfo(userId: number) {
    return new Promise<UserInfoResponseDto | null>(
      async (resolve, reject) => {
        try {
          const model = await UserInfoModel.findOne({
            where: { id: userId }
          });
          if (model !== null) {
            const response = toUserInfoResponseDto(model);
            resolve(response);
          } else {
            resolve(null);
          }
        } catch (error) {
          reject(error);
        }
      }
    );
  }
}
