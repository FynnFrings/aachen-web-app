import { Router } from "express";
import { getAllBlogs, getBlogById } from "./handlers";

const EventsRouter = Router();

EventsRouter.get("/", getAllBlogs);
EventsRouter.get("/:id", getBlogById);

export default EventsRouter;
