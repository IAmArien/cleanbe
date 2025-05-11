/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('cleanbe', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
