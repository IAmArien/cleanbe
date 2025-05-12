/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserLoginRequestDto, UserLoginResponseDto } from "@/domain/models/userLogin.dto";
import { UserLoginRepository } from "@/domain/repository/userLogin.repository";

export class LoginUser {

  constructor(private repository: UserLoginRepository) {}

  invoke(userLogin: UserLoginRequestDto): Promise<UserLoginResponseDto> {
    return this.repository.login(userLogin);
  }
}
