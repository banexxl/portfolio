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
        main: "#164e63", // cyan-800
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#8b5cf6", // purple-500
        contrastText: "#ffffff",
      },
      background: {
        default: mode === "light" ? "#ffffff" : "#121212",
        paper: mode === "light" ? "#ecfeff" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#475569" : "#ffffff",
        secondary: mode === "light" ? "#64748b" : "#b3b3b3",
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
