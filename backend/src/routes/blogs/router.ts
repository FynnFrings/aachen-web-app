import { Router } from "express";
import { getAllBlogs, getBlogById } from "./handlers";

// Rename EventsRouter to BlogRouter for more appropriate naming
const BlogRouter = Router();

// Route for getting all blogs
BlogRouter.get("/", getAllBlogs);
// Route for getting blog by ID
BlogRouter.get("/:id", getBlogById);

export default BlogRouter;
