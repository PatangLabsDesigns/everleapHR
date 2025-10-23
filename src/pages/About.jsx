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
import {
  Lightbulb,
  Balance,
  Visibility,
  TrendingUp,
  Favorite,
} from "@mui/icons-material";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Hero Section
const AboutHero = () => {
  return (
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
            <Typography variant="h1" gutterBottom sx={{ mb: 3 }}>
              Reimagining Hiring for a Better Tomorrow
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.25rem",
                color: "text.secondary",
              }}
            >
              We're on a mission to make hiring fair, efficient, and
              human-centered through the power of artificial intelligence.
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

// Our Story Section
const StorySection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <Typography variant="h2" gutterBottom>
                Born from Frustration, Built with Purpose
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  Everleap started with a simple observation: hiring is
                  fundamentally broken. Not just for companies struggling to
                  find talent, but for candidates whose potential goes
                  unrecognized due to outdated processes and unconscious bias.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  Two professionals—a designer and an AI engineer—experienced
                  this frustration firsthand. In their personal job searches,
                  they watched qualified candidates (including themselves) get
                  overlooked by keyword-matching algorithms. In their
                  professional lives, they saw HR teams drowning in resumes,
                  making snap judgments, and inadvertently passing over
                  exceptional talent.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  They asked:{" "}
                  <strong>
                    What if technology could make hiring more human, not less?
                  </strong>
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography variant="body1" paragraph>
                  That question became Everleap. By combining deep expertise in
                  human-centered design with cutting-edge AI, they set out to
                  build something different—a platform that amplifies human
                  judgment rather than replacing it, that eliminates bias rather
                  than encoding it, and that makes hiring faster without
                  sacrificing quality.
                </Typography>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Vision Section
const VisionSection = () => {
  const approaches = [
    "Fairness First: Every candidate deserves to be judged on their merits",
    "Human-AI Collaboration: Technology should empower people, not replace them",
    "Transparency: Everyone deserves to understand how decisions are made",
    "Continuous Innovation: Hiring will keep evolving, and so will we",
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #f8fffe 0%, #e6faf8 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Typography variant="h2" gutterBottom>
                  A World Where Talent Meets Opportunity
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  We envision a future where every candidate is evaluated
                  fairly, every company finds the right talent quickly, and the
                  hiring process brings out the best in both. Where AI handles
                  the repetitive work so humans can focus on meaningful
                  connections.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography variant="h3" gutterBottom sx={{ mt: 4, mb: 2 }}>
                  Our Approach
                </Typography>
                <Typography variant="body1" paragraph>
                  We're not just building software—we're disrupting an industry.
                  Traditional recruitment tools digitize old processes. We're
                  redesigning them from the ground up, questioning every
                  assumption about how hiring should work.
                </Typography>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
                What Drives Us
              </Typography>

              {approaches.map((approach, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card
                    sx={{
                      mb: 2,
                      p: 2,
                      borderLeft: "4px solid",
                      borderColor: "primary.main",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Typography variant="body1">{approach}</Typography>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Values Section
const ValuesSection = () => {
  const values = [
    {
      icon: <Lightbulb />,
      title: "Innovation Over Tradition",
      description:
        "We challenge conventional wisdom and aren't afraid to do things differently.",
    },
    {
      icon: <Balance />,
      title: "Fairness Over Convenience",
      description:
        "We build systems that prioritize equity, even when it's harder to implement.",
    },
    {
      icon: <Visibility />,
      title: "Transparency Over Opacity",
      description:
        "We believe everyone deserves to understand how AI makes decisions that affect their lives.",
    },
    {
      icon: <TrendingUp />,
      title: "Impact Over Growth",
      description:
        "We measure success by the positive change we create, not just the numbers we hit.",
    },
    {
      icon: <Favorite />,
      title: "People Over Algorithms",
      description: "Technology is our tool, but human potential is our focus.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              What We Stand For
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", color: "text.secondary" }}
            >
              Our values guide every decision we make and every line of code we
              write.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                    p: 3,
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 40px rgba(6, 191, 179, 0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      background: "primary.main",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      margin: "0 auto 1.5rem",
                      "& svg": { fontSize: "1.8rem" },
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h4" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {value.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Join Us Section
const JoinUsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #06BFB3 0%, #04a89d 100%)",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Typography variant="h2" gutterBottom>
              Be Part of the Change
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.2rem", mb: 4, opacity: 0.9 }}
            >
              We're building the future of hiring, and we're looking for
              passionate people to join us on this journey—whether as team
              members, early adopters, or partners.
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
                component={Link}
                to="/signup"
                sx={{
                  backgroundColor: "white",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                Join the Waitlist
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/contact"
                sx={{
                  borderColor: "white",
                  color: "white",
                  borderWidth: 2,
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderWidth: 2,
                  },
                }}
              >
                Get in Touch
              </Button>
            </Box>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography variant="body2" sx={{ mt: 3, opacity: 0.8 }}>
              Want to work with us? Email us at contact@everleap.in
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

// Main About Component
const About = () => {
  return (
    <Box>
      <AboutHero />
      <StorySection />
      <VisionSection />
      <ValuesSection />
      <JoinUsSection />
    </Box>
  );
};

export default About;
