import express  from "express";
import { validationResponse } from "../middleware/validationResponse";
import { body } from "express-validator";
import { login, logout, register } from "../controllers/authController";
import { authUser } from "../middleware/authMiddleware";

const router = express.Router();

router.post('/register', [
    body('name')
    .notEmpty()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be in string")
    .isLength({max:50})
    .withMessage("name cannot exceeed 50 characters"),
    body('email')
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email format is wrong"),
    body('password')
    .notEmpty()
    .withMessage("password is required")
    .isLength({min:8, max:32})
    .withMessage("password must be atleast 8 characters and cannot exceeed 32 characters"),
], validationResponse, register);

router.post('/login', [
    body('email')
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email format is wrong"),
    body('password')
    .notEmpty()
    .withMessage("password is required")
    .isLength({min:8, max:32})
    .withMessage("password must be atleast 8 characters and cannot exceeed 32 characters"),
], validationResponse, login);

router.get('/logout', authUser, logout)

export default router;