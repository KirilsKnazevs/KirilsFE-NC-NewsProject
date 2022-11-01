import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import HomePage from "./components/HomePage";
import Topic from "./components/Topic";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/topics/:topic" element={<Topic />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
