/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsDataSource, UserCredentialsRequestDto, UserCredentialsResponseDto } from "@/domain";

export class UserCredentialsRepository {

  constructor(private dataSource: UserCredentialsDataSource) {}

  createUserCredential(userCredential: UserCredentialsRequestDto): Promise<UserCredentialsResponseDto> {
    return this.dataSource.createUserCredential(userCredential);
  }
}
