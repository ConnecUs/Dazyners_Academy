import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  Avatar,
  Chip,
  TextField,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ForumIcon from '@mui/icons-material/Forum';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MotionBox = motion.div;

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 24px ${theme.palette.primary.main}22`,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  background: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '24px',
    color: theme.palette.primary.main,
  },
}));

const DiscussionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  background: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateX(8px)',
  },
}));

const Community = () => {
  const features = [
    {
      title: 'Discussion Forums',
      icon: <ForumIcon />,
      description: 'Engage in discussions about AI, machine learning, and development.',
      action: 'Join Discussion',
    },
    {
      title: 'Study Groups',
      icon: <GroupIcon />,
      description: 'Form or join study groups to learn and grow together.',
      action: 'Find Groups',
    },
    {
      title: 'Events',
      icon: <EventIcon />,
      description: 'Participate in webinars, workshops, and community events.',
      action: 'View Events',
    },
    {
      title: 'Projects',
      icon: <CodeIcon />,
      description: 'Collaborate on open-source projects and build your portfolio.',
      action: 'Explore Projects',
    },
  ];

  const discussions = [
    {
      title: 'Getting Started with Neural Networks',
      author: 'Alex Chen',
      avatar: 'A',
      date: '2 hours ago',
      tags: ['Deep Learning', 'Beginners'],
      replies: 12,
    },
    {
      title: 'Best Practices for Model Training',
      author: 'Sarah Johnson',
      avatar: 'S',
      date: '5 hours ago',
      tags: ['Best Practices', 'Training'],
      replies: 8,
    },
    {
      title: 'Project Showcase: AI Image Generator',
      author: 'Mike Zhang',
      avatar: 'M',
      date: '1 day ago',
      tags: ['Project', 'Computer Vision'],
      replies: 15,
    },
  ];

  return (
    <Container>
      <Box mb={6}>
        <Typography variant="h2" gutterBottom>
          Community
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Connect, learn, and grow with fellow AI enthusiasts
        </Typography>
      </Box>

      <Grid container spacing={4} mb={6}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StyledCard>
                <CardContent>
                  <IconWrapper>
                    {feature.icon}
                  </IconWrapper>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="textSecondary" paragraph>
                    {feature.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    {feature.action}
                  </Button>
                </CardContent>
              </StyledCard>
            </MotionBox>
          </Grid>
        ))}
      </Grid>

      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          Recent Discussions
        </Typography>
        <Box mb={4}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Start a new discussion..."
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary">
            Post Discussion
          </Button>
        </Box>

        {discussions.map((discussion, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <DiscussionCard>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ mr: 2 }}>{discussion.avatar}</Avatar>
                <Box>
                  <Typography variant="subtitle1">
                    {discussion.author}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {discussion.date}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6" gutterBottom>
                {discussion.title}
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  {discussion.tags.map((tag, idx) => (
                    <Chip
                      key={idx}
                      label={tag}
                      size="small"
                      variant="outlined"
                      sx={{ mr: 1 }}
                    />
                  ))}
                </Box>
                <Typography variant="body2" color="textSecondary">
                  {discussion.replies} replies
                </Typography>
              </Box>
            </DiscussionCard>
          </MotionBox>
        ))}
      </Box>

      <Box mb={6}>
        <Typography variant="h4" gutterBottom>
          Connect with Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<GitHubIcon />}
              href="http://github.com/connecus"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<LinkedInIcon />}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Community;
