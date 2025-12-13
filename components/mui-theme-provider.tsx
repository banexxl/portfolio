'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const buildTheme = (mode: 'light' | 'dark') =>
     createTheme({
          palette: {
               mode,
               primary: {
                    main: mode === 'light' ? '#2563eb' : '#60a5fa',
                    light: mode === 'light' ? '#3b82f6' : '#93c5fd',
                    dark: mode === 'light' ? '#1d4ed8' : '#2563eb',
                    contrastText: '#ffffff',
               },
               secondary: {
                    main: mode === 'light' ? '#0ea5e9' : '#22d3ee',
                    light: mode === 'light' ? '#38bdf8' : '#67e8f9',
                    dark: mode === 'light' ? '#0284c7' : '#0891b2',
                    contrastText: '#0b1220',
               },
               background: {
                    default: mode === 'light' ? '#f8fafc' : '#0b1220',
                    paper: mode === 'light' ? '#ffffff' : '#111827',
               },
               text: {
                    primary: mode === 'light' ? '#0f172a' : '#e2e8f0',
                    secondary: mode === 'light' ? '#334155' : '#cbd5e1',
               },
               divider: mode === 'light' ? '#e2e8f0' : '#1f2937',
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
     });

export default function ThemeProviderWithToggle({ children }: { children: ReactNode }) {
     const [mode, setMode] = useState<'light' | 'dark'>('light');

     useEffect(() => {
          const stored = (typeof window !== 'undefined' && localStorage.getItem('mui-theme-mode')) as 'light' | 'dark' | null;
          if (stored) setMode(stored);
     }, []);

     const colorMode = useMemo(
          () => ({
               toggleColorMode: () => {
                    setMode((prevMode: 'light' | 'dark') => (prevMode === 'light' ? 'dark' : 'light'));
               },
          }),
          [],
     );

     const theme = useMemo(
          () =>
               buildTheme(mode),
          [mode],
     );

     return (
          <ColorModeContext.Provider value={colorMode}>
               <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
               </ThemeProvider>
          </ColorModeContext.Provider>
     );
}
