import express from "express";
import morgan from "morgan";
import { apiRouter } from "./routes/apiRoutes";

const app = express();
const port = 9000;

app.use(express.json());
app.use(morgan("dev"));
app.use("/v1/api", apiRouter);

app.listen(port, () =>
    console.log(`REST API server ready at: http://localhost:${port}`)
);
