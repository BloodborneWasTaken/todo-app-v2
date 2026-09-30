import { body } from "express-validator";

export const createCategoryValidation = [
    body("title", "title is required, title must be a stirng").notEmpty().isString(),
]

export const updateCategoryValidation = [
    body("title", "title is required, title must be a stirng").notEmpty().isString(),
]