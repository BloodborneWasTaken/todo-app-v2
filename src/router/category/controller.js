import _ from "lodash";

import Category from "../../models/category.js";

export const getCategories = async (req, res) => {
    const categories = await Category.find();

    res.status(200).json(categories);
};

export const getCategoryById = async (req, res) => {
    const categories = await Category.findById(req.params.id);

    if (!categories) {
      return res.status(404).json({
        message: "category not found",
      });
    }
    res.status(200).json(categories);
};

export const createCategory = async (req, res) => {
    const data = _.pick(req.body, ["title"]);
    const category = await Category.create(data);

    res.status(201).json(category);
  } 


export const updateCategory = async (req , res) => {

    const data = _.pick(req.body, ["title"]);

    const category = await Category.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    });

    if (!category) {
      return res.status(404).json({
        message: "category not found",
      });
    }

    res.status(200).json(category);

};

export const deleteCategory = async (req, res, next) => {

    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({
        message: "category not found",
      });
    }

    res.status(200).json({
      message: "category deleted successfully",
    });

};