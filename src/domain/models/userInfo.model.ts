/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { sequelize } from "@/frameworks";
import { DataTypes, Model } from "sequelize";

export interface UserInfo {
  id: number;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  birth_date: string;
  sex: string;
  age: number;
  phone_number: string;
}

export class UserInfoModel extends Model<UserInfo> implements UserInfo {
  public id!: number;
  public email!: string;
  public first_name!: string;
  public middle_name!: string;
  public last_name!: string;
  public birth_date!: string;
  public sex!: string;
  public age!: number;
  public phone_number!: string;
}

UserInfoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "user_info",
    timestamps: false
  }
);
