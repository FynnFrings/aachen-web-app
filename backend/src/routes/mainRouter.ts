import { Router } from "express";
import BlogsRouter from "./blogs/router";

const MainRouter = Router();

MainRouter.use("/blog", BlogsRouter);

export default MainRouter;
