import express from 'express';
import dotenv from 'dotenv';
import Connection from './databse/dbConnection.js';
import route from './routes/routes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8010;

dotenv.config();
app.use(express.json());


app.use(cors()); // Enable CORS

app.use('/', route);

app.listen(PORT, () => {
    console.log("App is listening on port", PORT);
});

Connection();

