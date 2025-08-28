import { useState } from "react";
import { Box, Fab, Zoom } from "@mui/material";
import { Phone, Email, Download, Menu, Close } from "@mui/icons-material";

export default function FloatingActions() {
     const [open, setOpen] = useState(false);
     const trigger = typeof window !== 'undefined' && window.scrollY > 100;

     const handleDownloadCV = () => {
          const link = document.createElement("a");
          link.href = "/cv.pdf"; // CV file should be placed in public folder
          link.download = "Senior_Test_Engineer_CV.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
     };

     const handleCall = () => {
          window.location.href = "tel:+381123456789";
     };

     const handleEmail = () => {
          window.location.href =
               "mailto:your.email@example.com?subject=Portfolio Contact&body=Hello, I would like to get in touch regarding...";
     };

     return (
          <Box sx={{ position: "fixed", left: 16, top: "50%", transform: "translateY(-50%)", zIndex: 1000 }}>
               <Zoom in={trigger}>
                    <Box>
                         <Fab color="primary" size="medium" onClick={() => setOpen(!open)} sx={{ mb: 1 }}>
                              {open ? <Close /> : <Menu />}
                         </Fab>

                         <Zoom in={open}>
                              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                   <Fab color="secondary" size="small" onClick={handleCall} title="Call me">
                                        <Phone />
                                   </Fab>
                                   <Fab color="secondary" size="small" onClick={handleDownloadCV} title="Download CV">
                                        <Download />
                                   </Fab>
                                   <Fab color="secondary" size="small" onClick={handleEmail} title="Send email">
                                        <Email />
                                   </Fab>
                              </Box>
                         </Zoom>
                    </Box>
               </Zoom>
          </Box>
     );
}
