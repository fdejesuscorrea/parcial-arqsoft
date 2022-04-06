import express from "express";
import morgan from "morgan";
import dotenv from 'dotenv'

import productRoutes from './routes/productRoutes'

const app = express()
dotenv.config({path: './.env'})


app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/product', productRoutes)

export default app;