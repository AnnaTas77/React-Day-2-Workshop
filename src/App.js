import React, { useState } from "react";
import MainContent from "./components/MainContent.js";
import Header from "./components/Header.js";

function App() {
  // initialize state
  const [largeFont, setLargeFont] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    // Edit className and add style
    <div
      id="app"
      aria-label="app"
      className= {darkMode ? "dark" : "light"}
      style={largeFont ? { fontSize: "24px" } : { fontSize: "16px" }}
    >
      {/* pass above-defined state as props */}
      <Header
        largeFont={largeFont}
        setLargeFont={setLargeFont}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <aside>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
        <button>Company</button>
      </aside>
      <MainContent />
      <footer></footer>
    </div>
  );
}

module.exports = App;
