import express from "express";
import morgan from "morgan";
import { apiRouter } from "./routes/apiRoutes";

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/v1/api", apiRouter);

app.listen(PORT, () =>
    console.log(`🚀 REST API server ready at ⭐️: http://localhost:${PORT}`)
);
