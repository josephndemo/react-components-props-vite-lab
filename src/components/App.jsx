import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// Example posts data
const posts = [
  {
    id: 1,
    title: "About me",
    date: "Jan 2026",
    preview: "Software developer",
  },
  {
    id: 2,
    title: "Career",
    date: "Jan 2026",
    preview: "Systems Engineer at Google",
  },
];

function App() {
  return (
    <div className="App">
      <Header name="Joseph Blog" />

      <About
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60y-B-qoPCqpgARehINBImhuLDMaSpheV7A&s"
        about="My personal blog"
      />

      <ArticleList posts={posts} />
    </div>
  );
}

export default App;