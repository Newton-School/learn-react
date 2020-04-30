import React from "react";

export const theme = {
  light: {
    background: "#fff",
    foreground: "#000",
  },
  dark: {
    background: "#000",
    foreground: "#fff",
  },
};

export const ThemeContext = React.createContext(theme.light);
