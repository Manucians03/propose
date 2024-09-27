import { BrowserRouter } from "react-router-dom";

import {
  Achievement,
  Timeline,
  Navbar,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
        </div>
        <Achievement />
        <Timeline />
      </div>
    </BrowserRouter>
  );
};

export default App;
