import express from "express";
import {createUser,loginUser,getCurrentUserProfile,logoutCurrentUser,getAllUsers,updateCurrentUserProfile} from "../controllers/userController.js";

import {authenticate,authorizeAdmin} from "../middlewares/authMiddleware.js";
const router=express.Router();



router.route("/").post(createUser)
.get(authenticate,authorizeAdmin,getAllUsers)
router.route("/auth",loginUser)
router.route("/logout",logoutCurrentUser);
router.route("/profile").get(authenticate,getCurrentUserProfile).put(authenticate,updateCurrentUserProfile)
export default router;
