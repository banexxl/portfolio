import { useContext, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "../components/mui-theme-provider";

export default function ThemeSwitchButtonInline() {
     const colorMode = useContext(ColorModeContext);
     const [mode, setMode] = useState<'light' | 'dark'>('light');

     useEffect(() => {
          const storedMode = localStorage.getItem('mui-theme-mode') as 'light' | 'dark' | null;
          if (storedMode) setMode(storedMode);
     }, []);

     const handleClick = () => {
          colorMode.toggleColorMode();
          setMode((prev: 'light' | 'dark') => {
               const next = prev === 'light' ? 'dark' : 'light';
               localStorage.setItem('mui-theme-mode', next);
               return next;
          });
     };

     return (
          <IconButton onClick={handleClick} color="inherit" aria-label="toggle theme">
               {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
     );
}
