"use client"

import { FormEvent, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Chip,
  Avatar,
  IconButton,
  TextField,
  Paper,
  Divider,
  useTheme,
} from "@mui/material";
import {
  Phone,
  Email,
  Download,
  GitHub,
  LinkedIn,
  Send,
  Menu,
  Close,
  LocationOn,
  LightMode,
  DarkMode,
} from "@mui/icons-material"
import toast from "react-hot-toast"
import ThemeSwitchButtonInline from '../components/ThemeSwitchButtonInline';
import FloatingActions from '../components/FloatingActions';

// Tech stack data with icons
const techStack = [
  { name: "Cypress", category: "Testing", icon: "🌲" },
  { name: "Playwright", category: "Testing", icon: "🎭" },
  { name: "JavaScript", category: "Language", icon: "🟨" },
  { name: "TypeScript", category: "Language", icon: "🔷" },
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Frontend", icon: "▲" },
  { name: "MySQL", category: "Database", icon: "🐬" },
  { name: "MSSQL", category: "Database", icon: "🗄️" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "JIRA", category: "Tools", icon: "📋" },
  { name: "Postman", category: "Tools", icon: "📮" },
  { name: "VS Code", category: "Tools", icon: "💻" },
  { name: "Xray", category: "Tools", icon: "🔍" },
];

// Portfolio component
export default function Portfolio() {

  const theme = useTheme();

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });
      if (res.ok) {
        setFormStatus('success');
        setContactForm({ name: '', email: '', message: '' });
        toast.success('Message sent successfully!');
      } else {
        setFormStatus('error');
        toast.error('Failed to send message.');
      }
    } catch {
      setFormStatus('error');
      toast.error('Failed to send message.');
    }
  }

  return (
    <Box sx={{ flexGrow: 1, bgcolor: theme.palette.primary.main, color: theme.palette.text.primary, minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: theme.palette.primary.main }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Senior Test Engineer
          </Typography>
          <ThemeSwitchButtonInline />
          <IconButton color="inherit" href="https://github.com/banexxl" target="_blank">
            <GitHub />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/in/branislav-damjanovic-4b449445/" target="_blank">
            <LinkedIn />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: theme.palette.primary.contrastText,
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Avatar
            sx={{
              width: 150,
              height: 150,
              mx: "auto",
              mb: 3,
              border: "4px solid white",
            }}
            src="/me.jpg"
            alt="Profile"
          />
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
            Branislav Damjanović
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 400, opacity: 0.9 }}>
            Senior Test Engineer
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 600, mx: "auto", opacity: 0.8, lineHeight: 1.6 }}>
            Specialized in automated testing with Cypress & Playwright, ensuring quality through comprehensive test
            strategies and modern development practices...
          </Typography>
        </Container>
      </Box>

      {/* Tech Stack Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
          Technical Expertise
        </Typography>
        <Grid container spacing={3}>
          {techStack.map((tech, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center", py: 3 }}>
                  <Typography variant="h3" sx={{ fontSize: "2rem", mb: 1 }}>
                    {tech.icon}
                  </Typography>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {tech.name}
                  </Typography>
                  <Chip label={tech.category} size="small" color="primary" variant="outlined" />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Box sx={{ bgcolor: theme.palette.background.paper, py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
            About Me
          </Typography>
          <Paper elevation={1} sx={{ p: 4, bgcolor: theme.palette.background.default, color: theme.palette.text.primary }}>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              As a Senior Test Engineer with extensive experience in modern testing frameworks, I specialize in creating
              robust automated testing solutions that ensure software quality and reliability. My expertise spans across
              multiple testing tools and technologies, with a focus on end-to-end testing using Cypress and Playwright.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              I have worked with diverse technology stacks including JavaScript, TypeScript, React, and Next.js,
              combined with various database systems like MySQL, PostgreSQL, and MongoDB. My approach emphasizes
              comprehensive test coverage, maintainable test code, and seamless integration with CI/CD pipelines.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              I'm passionate about quality assurance, test automation, and helping development teams deliver reliable
              software products. I enjoy collaborating with cross-functional teams and mentoring junior engineers in
              testing best practices.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" gutterBottom textAlign="center" sx={{ mb: 6 }}>
          Get In Touch
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={1} sx={{ p: 3, height: "100%", bgcolor: theme.palette.background.default, color: theme.palette.text.primary }}>
              <Typography variant="h5" gutterBottom>
                Contact Information
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone sx={{ mr: 2, color: "primary.main" }} />
                <Typography>+381 66 415651</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Email sx={{ mr: 2, color: "primary.main" }} />
                <Typography>damjanovic.branislav@gmail.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn sx={{ mr: 2, color: "primary.main" }} />
                <Typography>Novi Sad, Serbia</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" startIcon={<GitHub />} href="https://github.com/banexxl" target="_blank">
                  GitHub
                </Button>
                <Button variant="outlined" startIcon={<LinkedIn />} href="https://www.linkedin.com/in/branislav-damjanovic-4b449445/" target="_blank">
                  LinkedIn
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={1} sx={{ p: 3, bgcolor: theme.palette.background.default, color: theme.palette.text.primary }}>
              <Typography variant="h5" gutterBottom>
                Send Message
              </Typography>
              <Box component="form" onSubmit={handleContactSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  margin="normal"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  margin="normal"
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                />
                <Button type="submit" variant="contained" size="large" startIcon={<Send />} sx={{ mt: 2 }}>
                  Send Message
                </Button>
                {formStatus === 'success' && (
                  <Typography color="success.main" sx={{ mt: 2 }}>
                    Message sent successfully!
                  </Typography>
                )}
                {formStatus === 'error' && (
                  <Typography color="error.main" sx={{ mt: 2 }}>
                    Failed to send message. Please try again later.
                  </Typography>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Google Maps Section */}
      <Box sx={{ bgcolor: theme.palette.background.paper, py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <LocationOn sx={{ mr: 2, color: "primary.main", fontSize: { xs: 36, md: 48 } }} />
            <Typography sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>Novi Sad, Serbia</Typography>
          </Box>
          <Paper elevation={2} sx={{ height: 400, overflow: "hidden", bgcolor: theme.palette.background.default }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46302.658683158004!2d19.793909!3d45.267136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b108a1b49c5b7%3A0x40b82c3688b9460!2sNovi%20Sad%2C%20Serbia!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Novi Sad, Serbia Location"
            />
          </Paper>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, py: 4, mt: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" textAlign="center">
            © 2024 Test Engineer Portfolio. Built with Next.js and Material-UI.
          </Typography>
        </Container>
      </Box>

      {/* Floating Actions */}
      <FloatingActions />
    </Box>
  )
}
