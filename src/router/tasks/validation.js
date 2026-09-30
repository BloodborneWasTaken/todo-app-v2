import { body } from "express-validator";

export const createTaskValidation = [
    body("title", "title is required, title must be a stirng").notEmpty().isString(),
    body("description", "description is required, description must be a stirng").optional().isString(),
    body("status", " status must be a boolean").optional().isBoolean()
]

export const updateTaskValidation = [
    body("title", "title is required, title must be a stirng").notEmpty().isString(),
    body("description", "description is required, description must be a stirng").optional().isString(),
    body("status", " status must be a boolean").optional().isBoolean()
]