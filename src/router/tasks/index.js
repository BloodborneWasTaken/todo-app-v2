import { Router } from "express";
import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} from "./controller.js";
import { createTaskValidation, updateTaskValidation } from "./validation.js";
import { validationData } from "../../middleware/validation.js";

const task = Router();

task.get("/", getAllTasks);
task.get("/:id", getTaskById);
task.post("/", createTaskValidation, validationData, createTask);
task.put("/:id", updateTaskValidation, validationData, updateTask);
task.delete("/:id", deleteTask);

export default task;
