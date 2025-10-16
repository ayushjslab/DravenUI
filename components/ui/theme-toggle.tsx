"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        cursor-pointer
        flex items-center justify-center
        p-2 rounded-full backdrop-blur-md transition-all duration-300
        border border-green-400/20
        ${
          theme === "light"
            ? "bg-white/30 hover:bg-white/40"
            : "bg-black/40 hover:bg-black/50"
        }
      `}
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5 text-green-400 transition-transform duration-300 hover:scale-110" />
      ) : (
        <Moon className="h-5 w-5 text-green-400 transition-transform duration-300 hover:scale-110" />
      )}
    </button>
  );
}
