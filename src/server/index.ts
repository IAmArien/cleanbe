/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { sequelize } from '@/frameworks';
import { loginRoutes, userRoutes } from '@/interfaces/routes';
import express from 'express';

const app = express();
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', loginRoutes);

app.listen(3000, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connected at port 3000');
  } catch (error) {
    console.error(error);
  }
});

export default app;
