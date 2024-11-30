import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const HeroSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: `linear-gradient(45deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
  marginBottom: theme.spacing(6),
}));

const CertificationCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: theme.palette.background.paper,
  transition: 'transform 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: theme.palette.background.paper,
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: theme.spacing(1, 0),
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  background: theme.palette.background.default,
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '32px',
    color: theme.palette.primary.main,
  },
}));

const Certification = () => {
  const certificationLevels = [
    {
      title: 'Foundation Level',
      description: 'Perfect for beginners starting their AI journey',
      icon: <WorkspacePremiumIcon />,
      features: ['Basic AI concepts', 'Python fundamentals', 'Intro to ML'],
    },
    {
      title: 'Professional Level',
      description: 'For developers ready to build AI applications',
      icon: <TimelineIcon />,
      features: ['Advanced ML algorithms', 'Deep Learning', 'Project portfolio'],
    },
    {
      title: 'Expert Level',
      description: 'Master advanced AI concepts and architectures',
      icon: <EmojiEventsIcon />,
      features: ['Research methods', 'System design', 'Industry capstone'],
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to get certified?',
      answer: 'The certification timeline varies by level. Foundation level typically takes 2-3 months, Professional level 4-6 months, and Expert level 6-8 months.',
    },
    {
      question: 'What are the prerequisites?',
      answer: 'Foundation level has no prerequisites. Professional level requires basic programming knowledge. Expert level requires completion of Professional level.',
    },
    {
      question: 'Is the certification recognized by industry?',
      answer: 'Yes, our certifications are recognized by leading tech companies and have been developed in partnership with industry experts.',
    },
  ];

  return (
    <Box>
      <HeroSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" gutterBottom>
              AI Certification Program
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Validate your AI expertise with industry-recognized certifications
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <Container>
        <Grid container spacing={4} mb={8}>
          {certificationLevels.map((level, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CertificationCard>
                  <CardContent>
                    <IconWrapper>
                      {level.icon}
                    </IconWrapper>
                    <Typography variant="h5" gutterBottom>
                      {level.title}
                    </Typography>
                    <Typography color="textSecondary" paragraph>
                      {level.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {level.features.map((feature, idx) => (
                        <Typography
                          component="li"
                          key={idx}
                          color="textSecondary"
                          sx={{ mb: 1 }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                    <Box mt={3}>
                      <Button variant="contained" color="primary" fullWidth>
                        Learn More
                      </Button>
                    </Box>
                  </CardContent>
                </CertificationCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box mb={8}>
          <Typography variant="h4" gutterBottom>
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <StyledAccordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Certification;
