import express from "express";
import recipesRoutes from "./routes/recipes.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1", recipesRoutes)
app.use("/v1", categoriesRoutes)

export default app;
