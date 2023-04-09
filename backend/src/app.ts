import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import MainRouter from "./routes/mainRouter";
dotenv.config();

const EXPRESS_PORT = parseInt(process.env.EXPRESS_PORT ?? "5005", 10);

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.use(MainRouter);

app.listen(EXPRESS_PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${EXPRESS_PORT}`
  );
});
