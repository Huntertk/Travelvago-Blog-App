import 'dotenv/config';
import express, {Request, Response} from 'express';
import errorHandler  from './middleware/errorMiddleware';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes';
import userRouter from './routes/userRoutes';
import blogRouter from './routes/blogRoutes';
import viewRouter from './routes/viewRoutes';
import path from 'path';


//Express App Initialization
const app = express();
const PORT = process.env.PORT || 4000;


// Set the view engine to EJS
app.set('view engine', 'ejs');

// Specify the directory where your views are located
app.set('views', path.join(__dirname,"..", 'views'));


//Static Public Folder
app.use(express.static(path.join(__dirname, "..", "public")))


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//Routes
app.get('/health', (req:Request, res:Response) => {
    return res.status(200).json({messgage:"Server is running"})
})




//Api Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/blog', blogRouter);
app.use('/', viewRouter);



//Serving Frontend Statically
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")))

//Sending Frontend
app.get('*', (req:Request, res:Response) => {
    res.sendFile(path.join(__dirname, "..", "..", "frontend", "dist", "index.html"))
})

//Global Error Handler
app.use(errorHandler);


//Server Listen and DB Connect
const dbConn = async () => {
    try {
        await mongoose.connect(process.env.DB_URI as string);
        console.log("Db is connected to application");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }

}

dbConn();