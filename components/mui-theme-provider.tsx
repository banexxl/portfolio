'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createContext, ReactNode, useMemo, useState } from 'react';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

export default function ThemeProviderWithToggle({ children }: { children: ReactNode }) {
     const [mode, setMode] = useState<'light' | 'dark'>('light');

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
               createTheme({
                    palette: {
                         mode,
                    },
               }),
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
