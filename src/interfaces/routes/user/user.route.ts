/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsController, UserInfoController } from "@/interfaces/controllers";
import { Router } from "express";
import { container } from "tsyringe";

const router = Router();

const credentialsController = container.resolve<UserCredentialsController>("UserCredentialsController");
const infoController = container.resolve<UserInfoController>("UserInfoController");

router.post("/credentials/create", credentialsController.createUserCredential);
router.post("/info/create", infoController.createUserInfo);
router.get("/info", infoController.getUserInfo);

export default router;
