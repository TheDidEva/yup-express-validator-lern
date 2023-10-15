"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationShema = void 0;
var express_validator_1 = require("express-validator");
exports.validationShema = [
    (0, express_validator_1.body)('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 3, max: 10 })
        .withMessage("min length: 3, max length: 10"),
    (0, express_validator_1.body)('email')
        .isEmail()
        .withMessage("enter correct email address"),
    (0, express_validator_1.body)('password')
        .isLength({ min: 4, max: 10 })
        .withMessage("min lngth: 4, max length: 10"),
];
//# sourceMappingURL=validation-shema.js.map