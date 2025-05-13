/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { TokenRefreshRequestDto, TokenRefreshResponseDto } from "@/domain/models/userLogin.dto";
import { UserLoginRepository } from "@/domain/repository/userLogin.repository";

export class RefreshToken {

  constructor(private repository: UserLoginRepository) {}

  invoke(token: TokenRefreshRequestDto): Promise<TokenRefreshResponseDto> {
    return this.repository.refreshToken(token);
  }
}
