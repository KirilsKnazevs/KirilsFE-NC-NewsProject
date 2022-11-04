import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import HomePage from "./components/HomePage";
import Topic from "./components/Topic";
import Article from "./components/Article";
import { useState } from "react";
import { ThemeContext } from "./contexts/Theme";
import { UserContext } from "./contexts/User";

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState("guest");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <div className={`App__${theme}`}>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articles" element={<ArticlesList />} />
              <Route path="/topics/:topic" element={<Topic />} />
              <Route path="/articles/:article_id" element={<Article />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
