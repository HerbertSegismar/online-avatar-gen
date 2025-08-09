import React from "react";
import AvatarGenerator from "./components/AvatarGenerator";
import SEO from "./components/SEO";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SEO
        title="Random Avatar Generator - Create Unique SVG Avatars"
        description="Generate random avatars with customizable features. Download as SVG. No third-party libraries used. Built with React and Vite."
      />
      <div className="app">
        <header>
          <h1>Random Avatar Generator</h1>
          <p>Create unique SVG avatars with random features</p>
        </header>

        <main>
          <AvatarGenerator />
        </main>

        <div className="footer1">
          <p>Built with PASSION & L<span className="text-red-400">&hearts;</span>VE • All Avatars generated with Pure SVG</p>
          <div className="footer-links">
            <a href="/sitemap.xml" aria-label="Sitemap">
              Sitemap
            </a>
            <a href="/privacy" aria-label="Privacy Policy">
              Privacy
            </a>
            <a href="/terms" aria-label="Terms of Service">
              Terms
            </a>
          </div>
        </div>
        <footer>
          <Footer/>
        </footer>

      </div>
    </>
  );
}

export default App;
