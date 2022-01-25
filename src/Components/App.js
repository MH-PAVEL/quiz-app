import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../Contexts/AuthContext";
import "../styles/app.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import SignUp from "./Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRouter from "./PublicRouter";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/signup" element={
              <PublicRouter>
                <SignUp />
              </PublicRouter>} />

            <Route exact path="/login" element={
              <PublicRouter>
                <Login />
              </PublicRouter>} />

            <Route exact path="/quiz" element={
              <PrivateRoute>
                <Quiz />
              </PrivateRoute>} />


            <Route exact path="/result" element={
              <PrivateRoute>
                <Result />
              </PrivateRoute>} />

          </Routes>
        </Layout>
      </AuthProvider>
    </Router >
  );
}

export default App;
