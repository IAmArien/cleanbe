/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

export type OK = 200;
export type CREATED = 201;
export type BAD_REQUEST = 400;
export type UNAUTHORIZED = 401;
export type FORBIDDEN = 403;
export type NOT_FOUND = 404;
export type UNPROCESSABLE_ENTITY = 422;
export type TOO_MANY_REQUESTS = 429;
export type INTERNAL_SERVER_ERROR = 500;
export type BAD_GATEWAY = 502;
export type SERVICE_UNAVAILABLE = 503;

export type ApiResponseStatus =
  | OK
  | CREATED
  | BAD_REQUEST
  | UNAUTHORIZED
  | FORBIDDEN
  | NOT_FOUND
  | UNPROCESSABLE_ENTITY
  | TOO_MANY_REQUESTS
  | INTERNAL_SERVER_ERROR
  | BAD_GATEWAY
  | SERVICE_UNAVAILABLE;

export interface ApiResponse<T = any, T1 = any> {
  status: ApiResponseStatus;
  message: string;
  data?: T | null;
  errors?: T1 | null;
}
