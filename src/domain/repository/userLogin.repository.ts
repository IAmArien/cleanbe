/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserLoginDataSource, UserLoginRequestDto, UserLoginResponseDto } from "@/domain";

export class UserLoginRepository {

  constructor(private dataSource: UserLoginDataSource) {}

  login(userLogin: UserLoginRequestDto): Promise<UserLoginResponseDto> {
    return this.dataSource.login(userLogin);
  }
};
