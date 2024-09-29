import { BrowserRouter } from "react-router-dom";

import {
  Introduction,
  Achievements,
  Timeline,
  Questionnaire,
  Navbar,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import { Toaster } from "react-hot-toast";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-cover bg-center bg-no-repeat">
          <Navbar />
        </div>
        <Introduction />
        <Timeline />
        <Achievements />
        <Questionnaire />
      </div>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
