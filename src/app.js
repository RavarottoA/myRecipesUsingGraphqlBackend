import express from "express";
import recipesRoutes from "./routes/recipes.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import usersRoutes from "./routes/users.routes.js";
import cors from 'cors';
import session from 'express-session';
import flash from 'express-flash';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1", recipesRoutes);
app.use("/v1", categoriesRoutes);
app.use("/v1", usersRoutes);

app.use(
    session({
        secret: 'secret', //use .env here
        resave: false,
        saveUninitialized: false
    })
);

app.use(flash());

export default app;
