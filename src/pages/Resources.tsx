import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Link,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const ResourceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
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

const ResourceLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const ChipContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  marginTop: theme.spacing(2),
}));

const MotionBox = motion.div;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Resources = () => {
  const resources = [
    {
      title: 'Video Tutorials',
      icon: <VideoLibraryIcon />,
      description: 'Step-by-step video tutorials covering AI concepts and practical implementations.',
      links: [
        { text: 'Getting Started with AI', url: '#' },
        { text: 'Deep Learning Fundamentals', url: '#' },
        { text: 'Neural Networks Explained', url: '#' },
      ],
      tags: ['Beginner', 'Video', 'Interactive'],
    },
    {
      title: 'Documentation',
      icon: <MenuBookIcon />,
      description: 'Comprehensive documentation and API references for AI frameworks and tools.',
      links: [
        { text: 'TensorFlow Guide', url: '#' },
        { text: 'PyTorch Documentation', url: '#' },
        { text: 'scikit-learn Tutorials', url: '#' },
      ],
      tags: ['Reference', 'Technical', 'API'],
    },
    {
      title: 'Code Examples',
      icon: <CodeIcon />,
      description: 'Real-world code examples and sample projects to learn from.',
      links: [
        { text: 'Image Classification', url: '#' },
        { text: 'Natural Language Processing', url: '#' },
        { text: 'Reinforcement Learning', url: '#' },
      ],
      tags: ['Code', 'Projects', 'Hands-on'],
    },
    {
      title: 'Training Materials',
      icon: <SchoolIcon />,
      description: 'Structured learning materials and curriculum for self-paced study.',
      links: [
        { text: 'AI Learning Path', url: '#' },
        { text: 'Practice Exercises', url: '#' },
        { text: 'Study Guides', url: '#' },
      ],
      tags: ['Learning', 'Curriculum', 'Self-paced'],
    },
    {
      title: 'Tools & Software',
      icon: <BuildIcon />,
      description: 'Essential tools and software for AI development and experimentation.',
      links: [
        { text: 'Development Tools', url: '#' },
        { text: 'Model Training Tools', url: '#' },
        { text: 'Data Preparation Tools', url: '#' },
      ],
      tags: ['Tools', 'Software', 'Development'],
    },
    {
      title: 'Datasets',
      icon: <CloudDownloadIcon />,
      description: 'Curated datasets for training and testing AI models.',
      links: [
        { text: 'Image Datasets', url: '#' },
        { text: 'Text Corpora', url: '#' },
        { text: 'Structured Data', url: '#' },
      ],
      tags: ['Data', 'Training', 'Testing'],
    },
  ];

  return (
    <Container>
      <Box mb={6}>
        <Typography variant="h2" gutterBottom>
          Learning Resources
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Everything you need to master AI development
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionBox
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ResourceCard>
                <CardContent>
                  <IconWrapper>
                    {resource.icon}
                  </IconWrapper>
                  <Typography variant="h5" gutterBottom>
                    {resource.title}
                  </Typography>
                  <Typography color="textSecondary" paragraph>
                    {resource.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                    {resource.links.map((link, idx) => (
                      <Typography component="li" key={idx} sx={{ mb: 1 }}>
                        <ResourceLink href={link.url}>
                          {link.text}
                        </ResourceLink>
                      </Typography>
                    ))}
                  </Box>
                  <ChipContainer>
                    {resource.tags.map((tag, idx) => (
                      <Chip
                        key={idx}
                        label={tag}
                        size="small"
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </ChipContainer>
                </CardContent>
              </ResourceCard>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Resources;
