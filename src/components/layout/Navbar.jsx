import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton onClick={() => handleNavigation(link.path)}>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleNavigation("/login")}>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ px: 2, pt: 1 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleNavigation("/signup")}
          >
            Sign Up
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderBottom: "1px solid rgba(6, 191, 179, 0.1)",
          py: 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                flexGrow: isMobile ? 1 : 0,
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                mr: 4,
              }}
            >
              <Box
                component="img"
                src="/Logo.svg"
                alt="Everleap Logo"
                sx={{ height: 48 }}
              />
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <>
                <Box sx={{ flexGrow: 1, display: "flex", gap: 3 }}>
                  {navLinks.map((link) => (
                    <Button
                      key={link.label}
                      component={Link}
                      to={link.path}
                      sx={{
                        color: "text.primary",
                        fontWeight: 500,
                        "&:hover": {
                          color: "primary.main",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    component={Link}
                    to="/login"
                    sx={{
                      color: "text.primary",
                      fontWeight: 500,
                      "&:hover": {
                        color: "primary.main",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Login
                  </Button>
                  <Button variant="contained" component={Link} to="/signup">
                    Sign Up
                  </Button>
                </Box>
              </>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: "text.primary" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer to prevent content from hiding under fixed AppBar */}
      <Toolbar sx={{ mb: 2 }} />
    </>
  );
};

export default Navbar;
