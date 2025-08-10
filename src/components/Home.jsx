import AvatarGenerator from "./AvatarGenerator";
import "../index.css";
import { BackgroundBeams } from "./ui/background-beams";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex-col relative min-h-screen">
      <BackgroundBeams className="fixed -z-10" />
      <div className="app relative z-10">
        <header>
          <h1>Random Avatar Generator</h1>
          <p>Create unique SVG avatars with random features</p>
        </header>

        <main className="flex justify-center items-center p-4">
          <div className="w-full max-w-md aspect-square">
            {" "}
            {/* Container with fixed aspect ratio */}
            <AvatarGenerator />
          </div>
        </main>

        <div className="footer1">
          <p>
            Built with PASSION & L<span className="text-red-400">&hearts;</span>
            VE • All Avatars generated with Pure SVG
          </p>
          <nav className="footer-links">
            <Link to="/privacy" aria-label="Privacy Policy">
              Privacy Policy
            </Link>
            <Link to="/terms" aria-label="Terms of Service">
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
