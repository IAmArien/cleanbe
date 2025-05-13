/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { TokenRefreshRequestDto, TokenRefreshResponseDto } from '@/domain/models/userAuth.dto';
import { UserAuthRepository } from '@/domain/repository/userAuth.repository';

export class RefreshToken {
  constructor(private repository: UserAuthRepository) {}

  invoke(token: TokenRefreshRequestDto): Promise<TokenRefreshResponseDto> {
    return this.repository.refreshToken(token);
  }
}
