import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(45deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 50% 50%, ${theme.palette.primary.main}22 0%, transparent 50%)`,
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: theme.palette.background.paper,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const FeatureGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
}));

const Home = () => {
  const features = [
    {
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of experience in AI and development.',
    },
    {
      title: 'Hands-on Projects',
      description: 'Build real-world applications and add them to your portfolio.',
    },
    {
      title: 'Interactive Learning',
      description: 'Engage with our community and get real-time feedback on your progress.',
    },
    {
      title: 'Career Support',
      description: 'Get guidance on your career path and job placement assistance.',
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
            <Typography variant="h1" gutterBottom>
              Welcome to Dazyners Academy
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Master the art of AI development with our comprehensive courses
            </Typography>
            <Box mt={4}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mr: 2 }}
              >
                Explore Courses
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
              >
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Container>
      </HeroSection>

      <Container>
        <FeatureGrid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StyledCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </FeatureGrid>
      </Container>
    </Box>
  );
};

export default Home;
