import { validationResult } from "express-validator";
import _ from "lodash";

import Category from "../../models/category.js";
import Task from "../../models/tasks.js";

// let tasks = [
//   {
//     id: 1,
//     title: "Do homeworks",
//     description: "English",
//     status: false,
//   },
// ];

export const getAllTasks = async (req, res)=>{
    const tasks = await Task.find().populate("categoryId")
    res.status(200).json(tasks)
}

export const getTaskById = async (req,res)=>{
    const task = await Task.findById(req.params.id).populate("categoryId")
    if(!task) 
        return res.status(404).json({
            msg:"task not found"
        })

    res.status(200).json(task)    
}

export const createTask = async (req, res)=>{
    const data = _.pick(req.body, ["title", "categoryId", "description"]);
    const category = await Category.findById(data.categoryId)
    if (!category) return res.status(404).send("no valid category found")

    const task = await Task.create(data);

    res.status(200).json(task);
}


export const updateTask = async (req , res) => {

    const data = _.pick(req.body, ["title", "categoryId", "description"]);

    const task = await Task.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({
        message: "task not found",
      });
    }

    res.status(200).json(task);

};


export const deleteTask = async (req, res, next) => {

    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "task not found",
      });
    }

    res.status(200).json({
      message: "task deleted successfully",
    });

};