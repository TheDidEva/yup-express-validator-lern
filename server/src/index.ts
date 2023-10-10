import * as express from 'express';
import * as cors from "cors";
import { AppDataSource } from "./data-source";
import { userRouter } from './routers/user-router';

require("dotenv").config({ path: __dirname + './../.env' });

AppDataSource.initialize().then(async () => {
    const app = express();
    const PORT = process.env.PORT || 5000;

    app.use(cors());
    app.use(express.json());
    app.use('/api', userRouter);

    app.listen(PORT, () => {
        console.log(`server was start on port: ${PORT}`);
    });
}).catch(error => console.log(error));
