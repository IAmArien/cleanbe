/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { refreshTokenAuthenticator } from '@/interfaces/auth';
import { UserAuthController } from '@/interfaces/controllers';
import { Router } from 'express';
import { container } from 'tsyringe';

const router = Router();

const authController = container.resolve<UserAuthController>('UserAuthController');

router.post('/login', authController.login);
router.post('/refresh', refreshTokenAuthenticator, authController.refreshToken);

export default router;
