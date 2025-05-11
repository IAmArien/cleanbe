/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsController } from "@/interfaces/controllers";
import { Router } from "express";
import { container } from "tsyringe";

const router = Router();
const credentialsController = container.resolve<UserCredentialsController>("UserCredentialsController");

router.post("/create", credentialsController.createUserCredential);

export default router;
