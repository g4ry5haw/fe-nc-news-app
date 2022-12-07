import "./App.css";
import Nav from "./components/Nav";
import Stories from "./components/Stories";
import { Routes, Route } from "react-router-dom";
import SingleStory from "./components/SingleStory";
import Story from "./components/Story";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Stories />} />
        <Route path="/articles/:article_id" element={<Story />} />
      </Routes>
    </div>
  );
}

export default App;
