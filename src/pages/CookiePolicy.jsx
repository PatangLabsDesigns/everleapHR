import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const CookiePolicy = () => {
  return (
    <Box sx={{ backgroundColor: "background.paper", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography variant="h1" gutterBottom sx={{ mb: 2 }}>
            Cookie Policy
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
            Last Updated: January 2025
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              border: "1px solid",
              borderColor: "grey.200",
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontSize: "1.8rem", mt: 0 }}
            >
              What Are Cookies?
            </Typography>
            <Typography variant="body1" paragraph>
              Cookies are small text files that are stored on your device when
              you visit a website. They help websites remember your preferences
              and improve your browsing experience.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" gutterBottom>
              How We Use Cookies
            </Typography>
            <Typography variant="body1" paragraph>
              Everleap uses cookies to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Essential Cookies:</strong> Enable core functionality
                  like session management and authentication. These cookies are
                  strictly necessary and cannot be disabled.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Analytics Cookies:</strong> Help us understand how
                  visitors use our website through tools like Google Analytics.
                  These cookies require your consent.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Preference Cookies:</strong> Remember your settings
                  and preferences for a better user experience.
                </Typography>
              </li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" gutterBottom>
              Types of Cookies We Use
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: "1.1rem" }}>
                1. Session Cookies
              </Typography>
              <Typography variant="body1" paragraph>
                Temporary cookies that expire when you close your browser. Used
                for maintaining your login session.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: "1.1rem" }}>
                2. Persistent Cookies
              </Typography>
              <Typography variant="body1" paragraph>
                Remain on your device for a set period or until you delete them.
                Used to remember your preferences.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: "1.1rem" }}>
                3. Third-Party Cookies
              </Typography>
              <Typography variant="body1" paragraph>
                Set by external services we use, such as Google Analytics for
                website analytics.
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" gutterBottom>
              Managing Cookies
            </Typography>
            <Typography variant="body1" paragraph>
              You can control and manage cookies in several ways:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Browser Settings:</strong> Most browsers allow you to
                  refuse or delete cookies through their settings.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Cookie Banner:</strong> Use our cookie consent banner
                  to customize your preferences when you first visit our site.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Opt-Out Tools:</strong> Use browser plugins or opt-out
                  mechanisms provided by third-party services.
                </Typography>
              </li>
            </Box>

            <Typography
              variant="body1"
              paragraph
              sx={{
                p: 2,
                backgroundColor: "grey.50",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "grey.200",
              }}
            >
              <strong>Note:</strong> Disabling cookies may affect your ability
              to use certain features of our website.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" gutterBottom>
              Third-Party Services
            </Typography>
            <Typography variant="body1" paragraph>
              We use the following third-party services that may set cookies:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Google Analytics:</strong> For website analytics and
                  usage statistics (requires consent)
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Google Fonts:</strong> For website typography
                </Typography>
              </li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" gutterBottom>
              Cookie Retention
            </Typography>
            <Typography variant="body1" paragraph>
              Different cookies have different retention periods:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1">
                  <strong>Session Cookies:</strong> Deleted when you close your
                  browser
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Preference Cookies:</strong> Up to 12 months
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Analytics Cookies:</strong> Up to 24 months
                </Typography>
              </li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" gutterBottom>
              Updates to This Policy
            </Typography>
            <Typography variant="body1" paragraph>
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with an updated "Last Updated" date.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have questions about our use of cookies, please contact us:
            </Typography>
            <Box sx={{ pl: 2 }}>
              <Typography variant="body1" paragraph>
                <strong>Email:</strong> contact@everleap.in
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Address:</strong> Pune, India
              </Typography>
              <Typography variant="body1">
                <strong>Response Time:</strong> Within 30 days
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CookiePolicy;
