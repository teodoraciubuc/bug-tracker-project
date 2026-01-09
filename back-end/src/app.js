// acest fisier configureaza aplicatia Express: 
// - incarca variabilele
// - aplica middleware-uri globale precum CORS, JSON
// - defineste /api/health
// - conecteaza routerul principal
// - gestioneaza rutele inexistente
// - ataseaza handler-ul global de erori

import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.js';
import errorHandler from "./middlewares/errorHandler.js";
import commentRoutes from "./routes/comments.js"
import notificationRoutes from "./routes/notifications.js"

dotenv.config();
const app=express();

app.use(cors({
    origin: process.env.FRONTEND_ORIGIN || true,
    credentials: true,
}))

app.use(express.json());

app.get('/api/health', (req,res)=>res.status(200).json({ok: true}));

app.use('/api', router);
app.use("/api", commentRoutes);
app.use("/api", notificationRoutes);

app.use((req,res)=>{
    res.status(404).json({message: `Route ${req.method} ${req.originalUrl} not found`});
})

app.use(errorHandler);

export default app;