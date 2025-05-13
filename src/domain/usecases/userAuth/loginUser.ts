/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserLoginRequestDto, UserLoginResponseDto } from "@/domain/models/userAuth.dto";
import { UserAuthRepository } from "@/domain/repository/userAuth.repository";

export class LoginUser {

  constructor(private repository: UserAuthRepository) {}

  invoke(userLogin: UserLoginRequestDto): Promise<UserLoginResponseDto> {
    return this.repository.login(userLogin);
  }
}
