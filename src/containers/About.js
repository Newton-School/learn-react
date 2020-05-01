import React, { useContext, useState } from "react";
import { ThemeContext, theme } from "../context/themeContext";

const AboutMe = () => {
  const { selectedTheme } = useContext(ThemeContext);
  return <div>About Me {selectedTheme.foreground}</div>;
};

const AboutUs = React.memo(() => {
  console.log("hey");

  return <div>About Us</div>;
});

const AboutSomeone = () => {
  const { selectedTheme } = useContext(ThemeContext);

  return <div>About Someone {selectedTheme.foreground}</div>;
};

const AboutAll = React.memo(() => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>About All</p>
      <button onClick={() => setTheme({ ...theme.dark })}>Change Theme</button>
    </div>
  );
});

const About = () => {
  const [selectedTheme, setTheme] = useState({ ...theme.light });

  return (
    <ThemeContext.Provider value={{ selectedTheme, setTheme }}>
      <AboutMe />
      <AboutUs />
      <AboutAll />
      <AboutSomeone />
    </ThemeContext.Provider>
  );
};

export default About;
