import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/app.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
