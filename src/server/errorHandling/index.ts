/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { ApiResponse } from '@/types';
import { UniqueConstraintError, ValidationError, ValidationErrorItem } from 'sequelize';

export function handleSequelizeError<T>(error: T): ApiResponse {
  if (error instanceof UniqueConstraintError) {
    const path = error.errors[0]?.path;
    if (path) {
      const response: ApiResponse<any, ValidationErrorItem[]> = {
        status: 422,
        message: `${path} must not be duplicated.`,
        errors: error.errors,
      };
      return response;
    }
  } else if (error instanceof ValidationError) {
    const path = error.errors[0]?.path;
    if (path) {
      const response: ApiResponse<any, ValidationErrorItem[]> = {
        status: 422,
        message: `${path} validation failed.`,
        errors: error.errors,
      };
      return response;
    }
  } else if (error instanceof Error) {
    const response: ApiResponse<any, Error> = {
      status: 400,
      message: `${error.message}`,
      errors: error,
    };
    return response;
  }
  return {
    status: 500,
    message: 'Internal Server Error.',
  };
}
