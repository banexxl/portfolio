import { useState, useEffect } from "react";
import { Box, Fab, Tooltip, Zoom } from "@mui/material";
import { Phone, Email, Download, Menu, Close } from "@mui/icons-material";

export default function FloatingActions() {
     const [open, setOpen] = useState(false);
     const [trigger, setTrigger] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setTrigger(window.scrollY > 50);
          };

          window.addEventListener("scroll", handleScroll);
          handleScroll(); // run once on mount
          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     const handleDownloadCV = () => {
          const link = document.createElement("a");
          link.href = "/Branislav_Damjanovic_CV_en.pdf"; // CV file should be in public folder
          link.download = "Branislav_Damjanovic_CV_en.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
     };

     const handleCall = () => {
          window.location.href = "tel:+381 66 415651";
     };

     const handleEmail = () => {
          window.location.href =
               "mailto:your.email@example.com?subject=Portfolio Contact&body=Hello, I would like to get in touch regarding...";
     };

     return (
          <Box
               sx={{
                    position: "fixed",
                    left: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 1000,
               }}
          >
               <Zoom in={trigger} style={{ transitionDelay: trigger ? "300ms" : "0ms" }}>
                    <Box>
                         <Fab
                              color="primary"
                              size="medium"
                              onClick={() => setOpen(!open)}
                              sx={{ mb: 1 }}
                         >
                              {open ? <Close /> : <Menu />}
                         </Fab>

                         <Zoom in={open}>
                              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                   <Tooltip title="Call me" placement="right">
                                        <Fab
                                             color="secondary"
                                             size="small"
                                             onClick={handleCall}
                                        >
                                             <Phone />
                                        </Fab>
                                   </Tooltip>
                                   <Tooltip title="Download CV" placement="right">
                                        <Fab
                                             color="secondary"
                                             size="small"
                                             onClick={handleDownloadCV}
                                        >
                                             <Download />
                                        </Fab>
                                   </Tooltip>
                                   <Tooltip title="Send email" placement="right">
                                        <Fab
                                             color="secondary"
                                             size="small"
                                             onClick={handleEmail}
                                        >
                                             <Email />
                                        </Fab>
                                   </Tooltip>
                              </Box>
                         </Zoom>
                    </Box>
               </Zoom>
          </Box>
     );
}
