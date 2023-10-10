import { body } from 'express-validator';

export const validationShema = [
    body('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 3, max: 10 })
        .withMessage("min length: 3, max length: 10"),
    body('email')
        .isEmail()
        .withMessage("enter correct email address"),
    body('password')
        .isLength({ min: 4, max: 10 })
        .withMessage("min lngth: 4, max length: 10"),
];