/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { TokenRefreshRequestDto, TokenRefreshResponseDto, UserLoginDataSource, UserLoginRequestDto, UserLoginResponseDto } from "@/domain";
import { UserLoginRepository } from "@/frameworks/repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserLoginDataSourceImpl implements UserLoginDataSource {

  constructor(
    @inject("UserLoginRepositoryFrameworks") private repository: UserLoginRepository
  ) {}

  refreshToken(token: TokenRefreshRequestDto): Promise<TokenRefreshResponseDto> {
    return this.repository.refreshToken(token);
  }

  login(userLogin: UserLoginRequestDto): Promise<UserLoginResponseDto> {
    return this.repository.login(userLogin);
  }
}
