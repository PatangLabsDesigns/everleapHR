import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  AttachMoney,
  Security,
  AccountTree,
  SmartToy,
  Analytics,
  CheckCircle,
} from "@mui/icons-material";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Hero Section
const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f8fffe 0%, #e6faf8 100%)",
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(6, 191, 179, 0.1) 0%, transparent 70%)",
          top: "-200px",
          right: "-200px",
          animation: "float 6s ease-in-out infinite",
        },
        "@keyframes float": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-20px, 20px) rotate(5deg)" },
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    color: "text.primary",
                    mb: 2,
                  }}
                >
                  Autonomous HR That{" "}
                  <Box
                    component="span"
                    sx={{
                      color: "primary.main",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    Actually Works
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.25rem",
                    mb: 3,
                    color: "text.secondary",
                  }}
                >
                  Privacy-first AI agents that automate your entire HR
                  department—from hiring to offboarding—at a fraction of the
                  cost.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/signup"
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    to="/contact"
                  >
                    See How It Works
                  </Button>
                </Box>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircle sx={{ color: "primary.main", fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    DPDP Compliant • On-Prem Ready • SMB Optimized
                  </Typography>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right Visual */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 350, md: 500 },
                  background: "white",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                  padding: 3,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                {[
                  "Hiring",
                  "Onboarding",
                  "Payroll",
                  "Relations",
                  "Offboarding",
                  "Analytics",
                ].map((label, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <Box
                      sx={{
                        width: { xs: 80, md: 100 },
                        height: { xs: 80, md: 100 },
                        background: "linear-gradient(135deg, #06BFB3, #04a89d)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: 600,
                        fontSize: { xs: "0.7rem", md: "0.85rem" },
                        textAlign: "center",
                        boxShadow: "0 5px 20px rgba(6, 191, 179, 0.3)",
                        animation: "pulse 3s ease-in-out infinite",
                        animationDelay: `${index * 0.5}s`,
                        "@keyframes pulse": {
                          "0%, 100%": { transform: "scale(1)" },
                          "50%": { transform: "scale(1.05)" },
                        },
                      }}
                    >
                      {label}
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <TrendingUp />,
      title: "Smart Hiring Pipeline",
      description:
        "From job posting to candidate evaluation—automated resume parsing, PII redaction, semantic matching, and AI-powered shortlisting.",
    },
    {
      icon: <AttachMoney />,
      title: "Budget Intelligence",
      description:
        "Automatic budget validation, salary benchmarking with GPT-4, and cost tracking integrated with your existing accounting systems.",
    },
    {
      icon: <Security />,
      title: "Privacy-First Design",
      description:
        "Deterministic PII redaction before any LLM processing. Full audit trails, DPDP compliance, and optional on-premise deployment.",
    },
    {
      icon: <AccountTree />,
      title: "Knowledge Graph",
      description:
        "Supabase-powered graph database tracks relationships between roles, candidates, departments, and vendors for intelligent decision-making.",
    },
    {
      icon: <SmartToy />,
      title: "Autonomous Agents",
      description:
        "14+ specialized agents collaborate via Redis Streams—each handling specific tasks from JD writing to employee relations.",
    },
    {
      icon: <Analytics />,
      title: "Predictive Analytics",
      description:
        "AI-powered insights on time-to-fill, cost-per-hire, skills gaps, and retention predictions to optimize your HR strategy.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              End-to-End HR Automation
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", color: "text.secondary" }}
            >
              Specialized AI agents handle every aspect of your HR operations
              with minimal human intervention
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
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
                    background:
                      "linear-gradient(135deg, #f8fffe 0%, #ffffff 100%)",
                    border: "1px solid rgba(6, 191, 179, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 15px 40px rgba(6, 191, 179, 0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        background: "primary.main",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        mb: 2,
                        "& svg": { fontSize: "1.8rem" },
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Workflow Section
const WorkflowSection = () => {
  const steps = [
    {
      number: 1,
      title: "Hiring Request → Validation",
      description:
        "Requirement Agent validates requests, Finance Agent checks budgets, Market Research Agent benchmarks salaries—all in parallel through the swarm.",
    },
    {
      number: 2,
      title: "Job Posting → Distribution",
      description:
        "JD Agent drafts descriptions, Copy Rewriter optimizes for SEO, Content Publisher pushes to LinkedIn and job boards automatically.",
    },
    {
      number: 3,
      title: "Candidate Management",
      description:
        "Resume Agent parses and redacts PII, embeds to vector store, Candidate Engagement Agent handles communication, Evaluation Agent scores and shortlists.",
    },
    {
      number: 4,
      title: "Onboarding → Lifecycle",
      description:
        "Automated welcome emails, document generation, payroll integration. Employee Relations Agent handles queries. Offboarding Agent manages exits.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #f8fffe 0%, #e6faf8 100%)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: 6 }}>
            <Typography variant="h2" gutterBottom>
              How The Swarm Works
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", color: "text.secondary" }}
            >
              Seamless automation from hiring request to employee lifecycle
              management
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ maxWidth: 1000, mx: "auto" }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                sx={{
                  mb: 3,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  alignItems: { xs: "center", sm: "flex-start" },
                  p: 3,
                  textAlign: { xs: "center", sm: "left" },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateX(5px)",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    minWidth: 60,
                    height: 60,
                    background: "primary.main",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </Box>
                <Box>
                  <Typography variant="h3" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {step.description}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// CTA Section
const CTASection = () => {
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
              Ready to Transform Your HR?
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.2rem", mb: 3, opacity: 0.9 }}
            >
              Join forward-thinking SMBs and staffing agencies automating their
              HR operations
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/contact"
              sx={{
                backgroundColor: "white",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              Get Started Today
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

// Main Home Component
const Home = () => {
  return (
    <Box>
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <CTASection />
    </Box>
  );
};

export default Home;
