/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserInfo } from "./userInfo.model";

export interface UserLogin extends UserInfo {
  credential_user_id: number;
  access_token: string;
}
