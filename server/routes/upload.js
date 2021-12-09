const router = require('express').Router()
const cloudinary = require('cloudinary')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const fs = require('fs')

//upload image on cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.LOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})
//Upload image only admin can use
router.post('/upload', (req,res) => {
    try {
        console.log(req.files)
        if(!req.files || Object.keys(req.files).length === 0)
            return res.status(400).json ({ msg:'No file were uploaded'})
        
        const file = req.files.file;
        if(file.size > 1024*1024) {
            // removeTmp(file.tempfilePath)

            return res.status(400).json({msg:'Size too large'})
        }
        
        if(file.mimetype !== 'image/jpeg' && files.mimetype !== 'image/png')
            return res.status(400).json({msg:"File format is incorrect"})
            
        cloudinary.v2.uploader.upload(file.tempfilePath, {folder: "test"}, async (error, result) =>{
            if(error) throw error;

            res.json({public_id: result.public_id, url: result.secure_url})
        })
        res.json('test upload')
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})

//Delete image
router.post('/destroy', (req, res) => {
    try {
        const {public_id} = req.body;
        if(!public_id) return res.status(400).json({msg:'No image selected'})

        cloudinary.v2.uploader.destroy(public_id, async(error, result) => {
            if(error) throw error;

            res.json({msg:"Deleted Image"})
        })
    } catch (error) {
        return res.status(500).json({ msg: error.message})
    }
})

// const removeTmp = (path) => {
//     fs.unlink(path, error => {
//         if(error) throw error;
//     })
// }

module.exports = router