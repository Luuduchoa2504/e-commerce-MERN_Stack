const Products = require('../models/productModels')

//Filter, sorting and paginating
class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString
    }
    filtering(){
        const queryObj = {...this.queryString} // queryString=req.query
        // console.log({before: queryObj})//b4 delete page
        
        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete(queryObj[el]))

        // console.log({after: queryObj})//after delete page
        
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' +match)
        
        // console.log(queryObj,queryStr)

        //gte = greater than or equal
        //lte = less than or equal
        //lt = less than
        //gt = greater than
        this.query.fimd(JSON.parse(queryStr))

        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            // console.log(sortBy)
            this.query
        }else {
            this.query = this.query.sort('-createAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1|| 9
        const skip = (page -1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const productCtrl = {
    getProduct: async (req, res) => {
        try {
            const features = new APIfeatures(Products.find(), req.query)
            .filtering().sorting().paginating()
            const products = await features.query
            

            res.json({
                status: 'success',
                result: products.length,
                products: products
            })
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    createProduct: async (req, res) => {
        try {
            const {
                product_id, 
                name, 
                price, 
                description, 
                images, 
                category, 
                colors, 
                size
            } = req.body;

            if(!images) return res.status(400).json({ msg: 'No image upload'})

            const product = await Products.findOne(product_id)
            if(product)
                return res.status(400).json({msg:"This product already exist"})
            
            const newProduct = new Product({
                product_id, 
                name, 
                price, 
                description, 
                images, 
                category, 
                colors, 
                size
            })

            await newProduct.save()
            res.json({msg:'Product is created'})

        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id)

            res.json({msg:'Product deleted'})
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    },
    updateProduct: async (req, res) => {
        try {
            const {
                product_id, 
                name, 
                price, 
                description, 
                images, 
                category, 
                colors, 
                size
            } = req.body;

            if(!image) return res.status(400).json({msg: "No images upload"})

            await Products.findByIdAndUpdate({
                _id: req.params.id}, {
                    name,
                    price, 
                    description, 
                    images, 
                    category, 
                    colors, 
                    size 
                })
            
                res.json({msg:"Uploaded a product"})

        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }
}

module.exports = productCtrl