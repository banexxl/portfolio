"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

type ThemeMode = "light" | "dark"

interface ThemeContextType {
  mode: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

const createAppTheme = (mode: ThemeMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#2a32c3ff", // cyan-800
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#0b1358ff", // purple-500
        contrastText: "#ffffff",
      },
      background: {
        default: mode === "light" ? "#b5faf6ff" : "#026868ff",
        paper: mode === "light" ? "#a5fbffff" : "#290e80ff",
      },
      text: {
        primary: mode === "light" ? "#cbdffbff" : "#000000ff",
        secondary: mode === "light" ? "#a8bfdfff" : "#000000ff",
      },
    },
    typography: {
      fontFamily: '"Montserrat", "Open Sans", -apple-system, BlinkMacSystemFont, sans-serif',
      h1: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 700,
      },
      h2: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 600,
      },
      h3: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 600,
      },
      body1: {
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: 400,
      },
      body2: {
        fontFamily: '"Open Sans", sans-serif',
        fontWeight: 400,
      },
    },
    shape: {
      borderRadius: 8,
    },
  })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("light")

  useEffect(() => {
    const savedMode = localStorage.getItem("theme-mode") as ThemeMode
    if (savedMode) {
      setMode(savedMode)
    }
  }, [])

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light"
    setMode(newMode)
    localStorage.setItem("theme-mode", newMode)
  }

  const theme = createAppTheme(mode)

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
