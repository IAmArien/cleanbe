/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { tokenAuthenticator } from '@/interfaces/auth';
import { UserCredentialsController, UserInfoController } from '@/interfaces/controllers';
import { Router } from 'express';
import { container } from 'tsyringe';

const router = Router();

const credentialsController = container.resolve<UserCredentialsController>(
  'UserCredentialsController'
);
const infoController = container.resolve<UserInfoController>('UserInfoController');

router.post('/credentials/create', credentialsController.createUserCredential);
router.delete(
  '/credentials/delete/:userId',
  tokenAuthenticator,
  credentialsController.deleteUserCredential
);

router.post('/info/create', infoController.createUserInfo);
router.delete('/info/delete/:userId', tokenAuthenticator, infoController.deleteUserInfo);
router.patch('/info/patch/:userId', tokenAuthenticator, infoController.patchUserInfo);
router.get('/info/:userId', tokenAuthenticator, infoController.getUserInfo);
router.get('/list', tokenAuthenticator, infoController.getUserList);

export default router;
