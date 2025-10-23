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

const Terms = () => {
  return (
    <Box sx={{ backgroundColor: "background.paper", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography variant="h1" gutterBottom sx={{ mb: 2 }}>
            Terms and Conditions
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
              1. Agreement to Terms
            </Typography>
            <Typography variant="body1" paragraph>
              By accessing Everleap's website and services, you agree to be
              bound by these Terms and Conditions. If you disagree with any part
              of these terms, please do not use our website.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              2. Use of Website
            </Typography>

            <Typography variant="h3" gutterBottom>
              Eligibility
            </Typography>
            <Typography variant="body1" paragraph>
              You must be at least 18 years old to use our services.
            </Typography>

            <Typography variant="h3" gutterBottom>
              Permitted Use
            </Typography>
            <Typography variant="body1" paragraph>
              You may use our website for lawful purposes only. You agree not
              to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1">
                  Violate any applicable laws or regulations
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Infringe on intellectual property rights
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Transmit harmful code, viruses, or malware
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Attempt unauthorized access to our systems
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Misrepresent your identity or affiliation
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Engage in any form of automated data collection (scraping)
                </Typography>
              </li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              3. Intellectual Property
            </Typography>
            <Typography variant="body1" paragraph>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of Everleap and is protected
              by Indian and international copyright and trademark laws.
            </Typography>
            <Typography variant="body1" paragraph>
              We grant you a limited, non-exclusive, non-transferable license to
              access and use our website for personal, non-commercial purposes
              only.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              4. Waitlist and Beta Access
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1">
                  Joining our waitlist does not guarantee product access
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Beta access may be revoked at any time
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Features and functionality are subject to change without
                  notice
                </Typography>
              </li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              5. User Content
            </Typography>
            <Typography variant="body1" paragraph>
              By submitting content (feedback, suggestions, ideas) to us, you
              grant Everleap a worldwide, royalty-free, perpetual, irrevocable
              license to use, reproduce, modify, adapt, publish, and incorporate
              such content into our products and services.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              6. Disclaimer of Warranties
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                p: 2,
                backgroundColor: "grey.50",
                borderRadius: 2,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              The website and services are provided "AS IS" and "AS AVAILABLE"
              without warranties of any kind, either express or implied.
            </Typography>
            <Typography variant="body1" paragraph>
              We do not warrant that:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1">
                  The website will be uninterrupted or error-free
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Defects will be corrected
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  The website is free of viruses or harmful components
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Information provided is accurate or complete
                </Typography>
              </li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              7. Limitation of Liability
            </Typography>
            <Typography variant="body1" paragraph>
              To the maximum extent permitted by law, Everleap shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including but not limited to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1">
                  Loss of profits or revenue
                </Typography>
              </li>
              <li>
                <Typography variant="body1">Loss of data</Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Loss of business opportunity
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Cost of substitute services
                </Typography>
              </li>
            </Box>
            <Typography variant="body1" paragraph>
              Our total liability shall not exceed ₹10,000 or the amount paid by
              you in the past 12 months, whichever is greater.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              8. Indemnification
            </Typography>
            <Typography variant="body1" paragraph>
              You agree to indemnify, defend, and hold harmless Everleap, its
              officers, directors, employees, and agents from any claims,
              liabilities, damages, losses, and expenses (including legal fees)
              arising from:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <li>
                <Typography variant="body1">Your use of the website</Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Your violation of these Terms
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Your violation of any rights of another party
                </Typography>
              </li>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              9. Privacy
            </Typography>
            <Typography variant="body1" paragraph>
              Your use of our website is also governed by our{" "}
              <a href="/privacy-policy" style={{ color: "#06BFB3" }}>
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              10. Modifications
            </Typography>
            <Typography variant="body1" paragraph>
              We reserve the right to modify or discontinue the website or
              services at any time, with or without notice. We may also revise
              these Terms at any time. Continued use after changes constitutes
              acceptance of the modified terms.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              11. Changes to Terms
            </Typography>
            <Typography variant="body1" paragraph>
              We may update these Terms from time to time. The "Last Updated"
              date at the top will reflect the most recent revision. We
              encourage you to review these Terms periodically.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              12. Termination
            </Typography>
            <Typography variant="body1" paragraph>
              We may terminate or suspend your access to our website
              immediately, without prior notice or liability, for any reason,
              including breach of these Terms.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              13. Governing Law
            </Typography>
            <Typography variant="body1" paragraph>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising from these Terms shall be
              subject to the exclusive jurisdiction of the courts in Pune,
              Maharashtra, India.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              14. Dispute Resolution
            </Typography>

            <Typography variant="h3" gutterBottom>
              Negotiation First
            </Typography>
            <Typography variant="body1" paragraph>
              Contact us at contact@everleap.in to resolve any disputes
              informally before pursuing legal action.
            </Typography>

            <Typography variant="h3" gutterBottom>
              Arbitration
            </Typography>
            <Typography variant="body1" paragraph>
              Any unresolved disputes shall be settled through binding
              arbitration in Pune, India, under the Arbitration and Conciliation
              Act, 1996.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h2" gutterBottom sx={{ fontSize: "1.8rem" }}>
              15. Contact Information
            </Typography>
            <Typography variant="body1" paragraph>
              For questions about these Terms:
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
              <Typography variant="body1">
                <strong>Address:</strong> Pune, India
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box
              sx={{
                p: 3,
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: 2,
                textAlign: "center",
                mt: 4,
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                BY USING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ AND
                AGREE TO THESE TERMS.
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Terms;
