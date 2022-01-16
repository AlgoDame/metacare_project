import express from "express";
import morgan from "morgan";

const app = express();
const port = 9000;

app.use(express.json());
app.use(morgan("tiny"));

app.listen(port, () =>
  console.log(`REST API server ready at: http://localhost:${port}`)
);
