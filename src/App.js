import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false); //for phone, to have drop down menu

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
        <div className="dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]">
          <Navbar
            darkMode={darkMode}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            toggleTheme={toggleTheme}
          />

          <section id="home" className="px-0 lg:px-5 2xl:px-40 py-10 lg:py-0">
            <Header darkMode={darkMode} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
