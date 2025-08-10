import AvatarGenerator from "./AvatarGenerator";
import "../index.css";
import { BackgroundBeams } from "./ui/background-beams";
import { Link } from "react-router-dom";
import SEO from "./SEO";

function App() {
  return (
    <>
      <SEO
        title="Random Avatar Generator | Create Unique SVG Avatars"
        description="Generate random avatars with customizable features. Download as SVG. No third-party libraries used. Built with React and Vite."
        path="/"
      />
      <div className="flex-col relative min-h-screen">
        <BackgroundBeams className="fixed -z-10" />
        <div className="app relative z-10">
          <header>
            <h1>Random Avatar Generator</h1>
            <p>Create unique SVG avatars with random features</p>
          </header>

          <main>
            <AvatarGenerator />
            <div id="ezoic-pub-ad-placeholder-101"></div>
            <script>
                ezstandalone.cmd.push(function () {
                    ezstandalone.showAds(111)
                });
            </script>
          </main>

          <div className="footer1">
            <p>
              Built with PASSION & L
              <span className="text-red-400">&hearts;</span>
              VE • All Avatars generated with Pure SVG
            </p>
            <nav className="footer-links">
              <a href="/sitemap.xml" aria-label="Sitemap">
                Sitemap
              </a>
              <Link to="/privacy" aria-label="Privacy Policy">
                Privacy
              </Link>
              <Link to="/terms" aria-label="Terms of Service">
                Terms
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
