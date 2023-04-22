import { RequestHandler } from "express";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { database } from "../../firebase";

// Endpoint to get all blogs
export const getAllBlogs: RequestHandler = async (req, res) => {
  // Get reference to blog collection
  const blogCol = collection(database, "blog");
  // Get all documents in the blog collection
  const blogSnapshot = await getDocs(blogCol);
  // Map each document to its data and create an array of blog objects
  const blogList = blogSnapshot.docs.map((doc) => doc.data());
  // Return the blog list as JSON response
  res.json(blogList);
};

interface BlogParams {
  id: string;
}

// Endpoint to get a blog by ID
export const getBlogById: RequestHandler<BlogParams> = async (req, res) => {
  try {
    // Get reference to the blog document with the given ID
    const blogRef = doc(database, `blog/${req.params.id}`);
    // Get the blog document snapshot
    const blogSnapshot = await getDoc(blogRef);
    // If the blog exists, return it as a JSON response
    // Otherwise, send a 404 status code
    if (blogSnapshot.exists()) {
      res.json(blogSnapshot.data());
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Log any errors and send a 500 status code
    console.error(err);
    res.sendStatus(500);
  }
};
