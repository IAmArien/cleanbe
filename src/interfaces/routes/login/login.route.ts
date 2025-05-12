/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserLoginController } from "@/interfaces/controllers";
import { Router } from "express";
import { container } from "tsyringe";

const router = Router();

const loginController = container.resolve<UserLoginController>("UserLoginController");

router.post("/login", loginController.login);

export default router;
