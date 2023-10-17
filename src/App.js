import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(true); //for phone, to have drop down menu

  const toggleMenu = () => {
    // setIsOpen(!isOpen);
    setIsOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`w-full h-full min-h-[100vh] bg-white ${darkMode && "dark"}`}
    >
      <div className="w-full h-full min-h-[100vh] bg-white">
        <div
          className={`bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]`}
        >
          <Navbar
            darkMode={darkMode}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
