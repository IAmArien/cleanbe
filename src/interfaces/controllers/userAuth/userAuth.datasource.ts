/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { TokenRefreshRequestDto, TokenRefreshResponseDto, UserAuthDataSource, UserLoginRequestDto, UserLoginResponseDto } from "@/domain";
import { UserAuthRepository } from "@/frameworks/repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserAuthDataSourceImpl implements UserAuthDataSource {

  constructor(
    @inject("UserAuthRepositoryFrameworks") private repository: UserAuthRepository
  ) {}

  refreshToken(token: TokenRefreshRequestDto): Promise<TokenRefreshResponseDto> {
    return this.repository.refreshToken(token);
  }

  login(userLogin: UserLoginRequestDto): Promise<UserLoginResponseDto> {
    return this.repository.login(userLogin);
  }
}
