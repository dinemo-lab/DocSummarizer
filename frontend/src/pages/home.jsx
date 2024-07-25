import { Link } from "react-router-dom";

import homeImage from "../assets/icon.png";


const Home = () => {
  return (
    <div className="home-container">
      <main>
        <img src={homeImage} alt="Document Summarizer" />
        <h2>Welcome to DocSummarizer</h2>
        <p>
          Easily summarize your documents in just a few clicks. Save time and
          get concise summaries with our powerful tool.
        </p>
        <Link to="/upload" className="get-started-button">
          Get Started
        </Link>
      </main>

     
    </div>
  );
};

export default Home;
