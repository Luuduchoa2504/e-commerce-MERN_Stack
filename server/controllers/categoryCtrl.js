const Category = require('../models/categoryModel')

const categoryCtrl = {
    getCategories: async(req, res) => {
        try {
            const category = await Category.find()
            res.json(category)
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    createCategory: async (req, res) => {
        try {
            //Only admin can create, delete and upadte category
            const {name} = req.body
            const category = await Category.findOne({name})
            if( category) return res.status(400).json({ msg: "This category already exist"})
            
            const newCategory = new Category({name})

            await newCategory.save()
            res.json({msg: "Create a category"})
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    deleteCategory: async (req, res) => {
        try {
            await Category.findByIdAndDelete(req.params.id)
            res.json({msg:" Delete a Category"})

        } catch (error) {
            return res.status(500).json({ msg: error.message})
        }
    },
    updateCategory: async (req, res) => {
        try {
            const {name} = req.body
            await Category.findByIdAndUpdate({_id: req.params.id}, {name})

            res.json({ msg: "Update a category"})
        } catch (error) {
            return res.status(500).json({ msg: error.message})
        }
    },
}

module.exports = categoryCtrl