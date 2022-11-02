import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import HomePage from "./components/HomePage";
import Topic from "./components/Topic";
import Article from "./components/Article";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/topics/:topic" element={<Topic />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
