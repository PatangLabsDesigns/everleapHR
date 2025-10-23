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

const PrivacyPolicy = () => {
  return (
    <Box sx={{ backgroundColor: "background.paper", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography variant="h1" gutterBottom sx={{ mb: 2 }}>
            Privacy Policy
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
              Introduction
            </Typography>
            <Typography variant="body1" paragraph>
              Everleap ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website
              and services.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              Information We Collect
            </Typography>

            <Typography variant="h3" gutterBottom>
              Personal Information
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1">
                  Name and contact information (email, phone)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Company information (name, size, industry)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Professional information (job title, role)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Communication preferences
                </Typography>
              </li>
            </Box>

            <Typography variant="h3" gutterBottom>
              Automatically Collected Information
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1">
                  IP address and device information
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Browser type and version
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Pages visited and time spent
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Operating system information
                </Typography>
              </li>
            </Box>

            <Typography variant="h3" gutterBottom>
              Cookies
            </Typography>
            <Typography variant="body1" paragraph>
              We use cookies to improve your experience and analyze site
              traffic. For more details, please see our{" "}
              <a href="/cookie-policy" style={{ color: "#06BFB3" }}>
                Cookie Policy
              </a>
              .
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              How We Use Your Information
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1" paragraph>
                  Respond to inquiries and provide support
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Send updates about Everleap (with consent)
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Improve our website and services
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Analyze usage patterns
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Comply with legal obligations
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Prevent fraud and ensure security
                </Typography>
              </li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              Data Sharing
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontWeight: 600 }}>
              We do not sell your personal information.
            </Typography>
            <Typography variant="body1" paragraph>
              We may share data only with:
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: "1.1rem" }}>
                Service Providers
              </Typography>
              <Typography variant="body1" paragraph>
                Trusted partners helping us operate (hosting, analytics, email
                services)
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: "1.1rem" }}>
                Legal Requirements
              </Typography>
              <Typography variant="body1" paragraph>
                When required by law or to protect our rights
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: "1.1rem" }}>
                Business Transfers
              </Typography>
              <Typography variant="body1" paragraph>
                In case of merger or acquisition
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              Data Security
            </Typography>
            <Typography variant="body1" paragraph>
              We implement industry-standard security measures:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1">
                  Encryption of data in transit and at rest
                </Typography>
              </li>
              <li>
                <Typography variant="body1">Regular security audits</Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Access controls and authentication
                </Typography>
              </li>
              <li>
                <Typography variant="body1">Secure data storage</Typography>
              </li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              Your Rights
            </Typography>
            <Typography variant="body1" paragraph>
              You may have rights including:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1">
                  Access your personal data
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Correct incorrect information
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Request deletion of your data
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Object to certain processing
                </Typography>
              </li>
              <li>
                <Typography variant="body1">Withdraw consent</Typography>
              </li>
            </Box>
            <Typography variant="body1" paragraph>
              To exercise these rights, contact us at:{" "}
              <a href="mailto:contact@everleap.in" style={{ color: "#06BFB3" }}>
                contact@everleap.in
              </a>
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              Data Retention
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1">
                  <strong>Waitlist Information:</strong> Until launch + 1 year
                  or until deletion requested
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Website Analytics:</strong> 24 months
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Communication Records:</strong> 3 years
                </Typography>
              </li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              DPDP Compliance (India)
            </Typography>
            <Typography variant="body1" paragraph>
              We comply with the Digital Personal Data Protection Act, 2023. We
              obtain clear consent before processing your data and allow you to
              withdraw consent at any time.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              Children's Privacy
            </Typography>
            <Typography variant="body1" paragraph>
              Our services are not directed to individuals under 18. We do not
              knowingly collect information from children.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              Changes to This Policy
            </Typography>
            <Typography variant="body1" paragraph>
              We may update this policy periodically. Continued use after
              changes constitutes acceptance. We will notify you of significant
              changes via email or website notice.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have questions about this Privacy Policy:
            </Typography>
            <Box sx={{ pl: 2 }}>
              <Typography variant="body1" paragraph>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@everleap.in"
                  style={{ color: "#06BFB3" }}
                >
                  contact@everleap.in
                </a>
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

export default PrivacyPolicy;
