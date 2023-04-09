import { RequestHandler } from "express";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { addDoc } from "firebase/firestore/lite";
import { database } from "../../firebase";

export const getAllBlogs: RequestHandler = async (req, res) => {
  const eventsCol = collection(database, "blog");
  const eventSnapshot = await getDocs(eventsCol);
  const blogList = eventSnapshot.docs.map((doc) => doc.data());
  res.json(blogList);
};

export const getBlogtById: RequestHandler<{ itemId: string }> = async (
  req,
  res
) => {
  getDoc(doc(database, `blog/${req.params.itemId}`))
    .then((snapshot) => {
      snapshot.exists() ? res.json(snapshot.data()) : res.sendStatus(404);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
