import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/login" },
    { label: "Sign Up", path: "/signup" },
    { label: "Cookie Policy", path: "/cookie-policy" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms of Use", path: "/terms" },
    { label: "Legal", path: "/legal" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        py: { xs: 4, md: 6 },
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo & Description */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="/Logo.svg"
              alt="Everleap Logo"
              sx={{
                height: 48,
                mb: 2,
                filter: "brightness(0) invert(1)",
              }}
            />
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
              Privacy-first autonomous HR for the modern workplace.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Email: contact@everleap.in
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Location: Pune, India
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {footerLinks.slice(0, 5).map((link) => (
                <MuiLink
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    opacity: 0.8,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Legal Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Legal
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {footerLinks.slice(5).map((link) => (
                <MuiLink
                  key={link.label}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    opacity: 0.8,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} Everleap. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
