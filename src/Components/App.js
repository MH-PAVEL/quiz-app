import "../styles/app.css";
import Layout from "./Layout";
// import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        <SignUp />
      </Layout>
    </div>
  );
}

export default App;
