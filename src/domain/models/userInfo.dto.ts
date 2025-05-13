/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserInfo } from '@/domain';

export interface UserInfoRequestDto {
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  birthDate: string;
  sex: string;
  age: number;
  phoneNumber: string;
}

export interface UserInfoResponseDto {
  userId: number;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  birthDate: string;
  sex: string;
  age: number;
  phoneNumber: string;
}

export interface UserListInfoRequestDto {
  page?: number;
  pageSize?: number;
  sortBy?: 'ASC' | 'DESC';
}

export interface UserListInfoResponseDto extends UserListInfoRequestDto {
  totalPages?: number;
  data: UserInfoResponseDto[];
}

export function toUserInfo(dto: UserInfoRequestDto): UserInfo {
  return {
    id: 0,
    email: dto.email,
    first_name: dto.firstName,
    middle_name: dto.middleName,
    last_name: dto.lastName,
    birth_date: dto.birthDate,
    sex: dto.sex,
    age: dto.age,
    phone_number: dto.phoneNumber,
  };
}

export function toUserInfoResponseDto(userInfo: UserInfo): UserInfoResponseDto {
  return {
    userId: userInfo.id,
    email: userInfo.email,
    firstName: userInfo.first_name,
    middleName: userInfo.middle_name,
    lastName: userInfo.last_name,
    birthDate: userInfo.birth_date,
    sex: userInfo.sex,
    age: userInfo.age,
    phoneNumber: userInfo.phone_number,
  };
}

export function toUserListInfoResponseDto(
  request: UserListInfoRequestDto,
  userInfo: UserInfo[],
  count: number
): UserListInfoResponseDto {
  const page = parseInt(request.page?.toString() ?? '1');
  const pageSize = parseInt(request.pageSize?.toString() ?? '10');
  return {
    page: page,
    pageSize: pageSize,
    sortBy: request.sortBy ?? 'DESC',
    totalPages: Math.ceil(count / pageSize),
    data: userInfo.map((v) => toUserInfoResponseDto(v)),
  };
}
