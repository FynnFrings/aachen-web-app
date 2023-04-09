import { Router } from "express";
import { getAllBlogs, getBlogtById } from "./handlers";

const EventsRouter = Router();

EventsRouter.get("/", getAllBlogs);
EventsRouter.get("/:itemId", getBlogtById);

export default EventsRouter;
