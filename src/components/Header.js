import React from "react";

function Header({ largeFont, setLargeFont, darkMode, setDarkMode }) {
  // pull out props

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFont = () => {
    setLargeFont(!largeFont);
  };

  return (
    <header>
      <h1>ABC Inc.</h1>
      <div>
        {/* attach dark mode click handler */}
        <button className="material-icons" onClick={handleDarkMode}>
          {/* conditionally render light icon */}
          {darkMode ? "light_mode" : "dark_mode"}
        </button>

        {/* attach font size click handler */}
        <button className="material-icons" onClick={handleFont}>
          text_fields
        </button>
      </div>
    </header>
  );
}

module.exports = Header;
