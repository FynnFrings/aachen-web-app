// Import the Router class from the express library
import { Router } from "express";
// Import the BlogsRouter module from ./blogs/router file
import BlogsRouter from "./blogs/router";

// Create a new instance of Router class
const MainRouter = Router();

// Use the imported BlogsRouter module for any incoming requests starting with "/blog"
MainRouter.use("/blog", BlogsRouter);

// Export the main router module as default
export default MainRouter;
