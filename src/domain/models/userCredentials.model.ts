/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { DataTypes, Model } from "sequelize";
import { sequelize } from '@/frameworks';

export interface UserCredentials {
  id: number;
  user_email: string;
  user_password: string;
  type: 'user' | 'admin';
}

export class UserCredentialsModel extends Model<UserCredentials> implements UserCredentials {
  public id!: number;
  public user_email!: string;
  public user_password!: string;
  public type!: 'user';
}

UserCredentialsModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false 
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false 
    }
  },
  {
    sequelize,
    tableName: 'user_credentials',
    timestamps: false
  }
);
