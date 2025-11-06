import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (req, res)=> res.send("API is Working"))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

// Initialize database connection
let dbConnected = false;
const initializeDB = async () => {
    if (!dbConnected) {
        await connectDB();
        dbConnected = true;
    }
};

// For Vercel serverless functions
export default async (req, res) => {
    await initializeDB();
    return app(req, res);
};

// For local development
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    (async () => {
        await initializeDB();
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log('Server is running on port ' + PORT)
        });
    })();
}