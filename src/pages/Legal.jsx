import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Description, Security, Gavel, Cookie } from "@mui/icons-material";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Legal = () => {
  const legalDocs = [
    {
      icon: <Security />,
      title: "Privacy Policy",
      description:
        "Learn how we collect, use, and protect your personal information in compliance with DPDP Act 2023.",
      link: "/privacy-policy",
      color: "#06BFB3",
    },
    {
      icon: <Gavel />,
      title: "Terms of Use",
      description:
        "Understand the terms and conditions governing your use of our website and services.",
      link: "/terms",
      color: "#293239",
    },
    {
      icon: <Cookie />,
      title: "Cookie Policy",
      description:
        "Find out how we use cookies and similar technologies to improve your experience.",
      link: "/cookie-policy",
      color: "#06BFB3",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "background.paper" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f8fffe 0%, #e6faf8 100%)",
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Typography variant="h1" gutterBottom sx={{ mb: 2 }}>
                Legal Information
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.25rem",
                  color: "text.secondary",
                  mb: 3,
                }}
              >
                Transparency and trust are fundamental to everything we do at
                Everleap. Here you'll find all our legal policies and terms.
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Legal Documents Grid */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {legalDocs.map((doc, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 40px rgba(6, 191, 179, 0.15)",
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          background: doc.color,
                          borderRadius: "15px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          mb: 2,
                          "& svg": { fontSize: "1.8rem" },
                        }}
                      >
                        {doc.icon}
                      </Box>
                      <Typography variant="h3" gutterBottom>
                        {doc.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", mb: 3 }}
                      >
                        {doc.description}
                      </Typography>
                      <Button
                        variant="outlined"
                        component={Link}
                        to={doc.link}
                        fullWidth
                        sx={{ mt: "auto" }}
                      >
                        Read Full Policy
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Additional Information Section */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          backgroundColor: "grey.50",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{ textAlign: "center", mb: 4 }}
            >
              Our Commitment to Compliance
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h4" gutterBottom>
                    DPDP Act 2023
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    We comply with India's Digital Personal Data Protection Act,
                    2023, ensuring your data rights are protected and respected
                    at all times.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h4" gutterBottom>
                    Data Security
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Industry-standard encryption, secure storage, regular
                    audits, and comprehensive access controls protect your
                    information.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h4" gutterBottom>
                    Transparency
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    We believe in clear communication about how we collect, use,
                    and protect your data. No hidden clauses or confusing
                    jargon.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ p: 3, height: "100%" }}>
                  <Typography variant="h4" gutterBottom>
                    Your Rights
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    You have the right to access, correct, delete, and control
                    your personal data. We make it easy to exercise these
                    rights.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Typography variant="h2" gutterBottom>
                Questions About Our Legal Policies?
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3 }}
              >
                Our team is here to help. We typically respond within 24-48
                hours.
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="mailto:contact@everleap.in"
                >
                  Email Us
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/contact"
                >
                  Contact Form
                </Button>
              </Box>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: 3 }}
              >
                <strong>Email:</strong> contact@everleap.in
                <br />
                <strong>Address:</strong> Pune, India
                <br />
                <strong>Response Time:</strong> Within 30 days
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Last Updated Notice */}
      <Box
        sx={{
          py: 2,
          backgroundColor: "grey.100",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            All legal documents were last updated in January 2025. We review and
            update our policies regularly to ensure compliance and clarity.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Legal;
