/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { TokenRefreshRequestDto, TokenRefreshResponseDto, UserLoginRequestDto, UserLoginResponseDto } from "@/domain";

export interface UserLoginDataSource {
  login: (userLogin: UserLoginRequestDto) => Promise<UserLoginResponseDto>
  refreshToken: (token: TokenRefreshRequestDto) => Promise<TokenRefreshResponseDto>;
}
