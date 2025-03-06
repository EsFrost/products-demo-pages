"use client";

import { useEffect } from "react";

// This component helps prevent the flash of wrong theme (FOWT)
// by setting the theme before the page is rendered
export const ThemeScript = () => {
  useEffect(() => {
    // Script runs client-side only
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  return null;
};
