/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserLoginRequestDto, UserLoginResponseDto } from "@/domain";

export interface UserLoginDataSource {
  login: (userLogin: UserLoginRequestDto) => Promise<UserLoginResponseDto>
}
