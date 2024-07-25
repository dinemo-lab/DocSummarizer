import "./styles/App.css";
import FileUploadForm from "./components/FileUploadForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
//import Summary from "../src/pages/summary";
import Layout from "./components/layout";

function App() {
  return (

    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<FileUploadForm />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
