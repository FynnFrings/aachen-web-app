import express, { Express } from "express"; // Importing express and its types
import cors from "cors"; // Importing CORS for cross-origin resource sharing
import dotenv from "dotenv"; // Importing dotenv to load environmental variables
import MainRouter from "./routes/mainRouter"; // Importing main router

dotenv.config(); // Loads the environmental variables from .env file

const EXPRESS_PORT = parseInt(process.env.EXPRESS_PORT ?? "5005", 10); // Declaring a constant variable which holds the value of the port the server will run on. Using optional chaining for safety.

// Initializing an instance of Express
const app: Express = express();

// Adding middleware. Parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// Applying CORS middleware to all routes
app.use(cors());

// Defining a route handler for GET requests to the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Registering the router middleware
app.use(MainRouter);

// Starting the server and listening for incoming requests on the specified port
app.listen(EXPRESS_PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${EXPRESS_PORT}` // Outputting a message to the console indicating that the server is running and on which port
  );
});
