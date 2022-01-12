import "../styles/app.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <Layout>
        <Home></Home>
      </Layout>
    </div>
  );
}

export default App;
