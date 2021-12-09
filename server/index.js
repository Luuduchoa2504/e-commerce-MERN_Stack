require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')



const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

const userRouter = require('./routes/userRouter')
const categoryRouter = require('./routes/categoryRouter')
const upload = require('./routes/upload')
const productRouter = require('./routes/productRouter')

//Routes
app.use('/api', userRouter)
app.use('/api', categoryRouter)
app.use('/api', upload)
app.use('/api',productRouter)

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@e-commerce.pbqmx.mongodb.net/e-commerce?retryWrites=true&w=majority`,
        {
            // useCreateIndex: true,
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false
        
        })
    console.log('MongoDB connected')

    } catch (error) {
        console.log("err" + error.message)
        process.exit(1)
    }
}
connectDB()

const PORT = 5000

app.listen(PORT, () => 
    console.log(`Server started on port ${PORT}`))
