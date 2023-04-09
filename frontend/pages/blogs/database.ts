export interface IBlogCard {
  id: number | string;
  photo?: string;
  title: string;
  author: string;
  date: string;
  text: string;
  link: string;
}

export const articles: IBlogCard[] = [
  {
    id: 1,
    title: "Title 1",
    author: "Author 1",
    date: "01. April 2023",
    text: "voluptas fuga quae commodi facilis magnam veritatis id dolor dictased eaque impedit, magni aliquam. Saepe optio beatae voluptasliquid. Delectus.",
    link: "http://localhost:3000/blogs/1",
  },
  {
    id: 2,
    title: "Title 2",
    author: "Author 2",
    date: "02. April 2023",
    text: "voluptas fuga quae commodi facilis magnam veritatis id dolor dictased eaque impedit, magni aliquam. Saepe optio beatae voluptasliquid. Delectus.",
    link: "http://localhost:3000/blogs/2",
  },
  {
    id: 3,
    title: "Title 3",
    author: "Author 3",
    date: "03. April 2023",
    text: "voluptas fuga quae commodi facilis magnam veritatis id dolor dictased eaque impedit, magni aliquam. Saepe optio beatae voluptasliquid. Delectus.",
    link: "http://localhost:3000/blogs/3",
  },
  {
    id: 4,
    title: "Title 4",
    author: "Author 4",
    date: "04. April 2023",
    text: "voluptas fuga quae commodi facilis magnam veritatis id dolor dictased eaque impedit, magni aliquam. Saepe optio beatae voluptasliquid. Delectus.",
    link: "http://localhost:3000/blogs/4",
  },
  {
    id: 5,
    title: "Title 5",
    author: "Author 5",
    date: "05. April 2023",
    text: "voluptas fuga quae commodi facilis magnam veritatis id dolor dictased eaque impedit, magni aliquam. Saepe optio beatae voluptasliquid. Delectus.",
    link: "http://localhost:3000/blogs/5",
  },
  {
    id: 6,
    title: "Title 6",
    author: "Author 6",
    date: "06. April 2023",
    text: "voluptas fuga quae commodi facilis magnam veritatis id dolor dictased eaque impedit, magni aliquam. Saepe optio beatae voluptasliquid. Delectus.",
    link: "http://localhost:3000/blogs/6",
  },
];
