import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  Rating,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const CourseCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.paper,
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 8px 24px ${theme.palette.primary.main}22`,
  },
}));

const CourseMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%', // 16:9 aspect ratio
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(0deg, ${theme.palette.background.paper}88 0%, transparent 100%)`,
  },
}));

const ChipContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
  marginTop: theme.spacing(2),
}));

const Courses = () => {
  const courses = [
    {
      title: 'AI Fundamentals',
      description: 'Learn the basics of artificial intelligence and machine learning.',
      image: 'https://source.unsplash.com/random/800x600?ai',
      level: 'Beginner',
      duration: '8 weeks',
      rating: 4.8,
      tags: ['AI', 'ML', 'Python'],
    },
    {
      title: 'Advanced Neural Networks',
      description: 'Deep dive into neural networks and deep learning architectures.',
      image: 'https://source.unsplash.com/random/800x600?network',
      level: 'Advanced',
      duration: '12 weeks',
      rating: 4.9,
      tags: ['Deep Learning', 'TensorFlow', 'PyTorch'],
    },
    {
      title: 'Natural Language Processing',
      description: 'Master NLP techniques and build language processing applications.',
      image: 'https://source.unsplash.com/random/800x600?text',
      level: 'Intermediate',
      duration: '10 weeks',
      rating: 4.7,
      tags: ['NLP', 'BERT', 'Transformers'],
    },
    {
      title: 'Computer Vision',
      description: 'Learn to build and deploy computer vision applications.',
      image: 'https://source.unsplash.com/random/800x600?vision',
      level: 'Intermediate',
      duration: '10 weeks',
      rating: 4.8,
      tags: ['OpenCV', 'CNN', 'Object Detection'],
    },
  ];

  return (
    <Container>
      <Box mb={6}>
        <Typography variant="h2" gutterBottom>
          Our Courses
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Comprehensive AI learning paths designed for your success
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CourseCard>
                <CourseMedia
                  image={course.image}
                  title={course.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {course.description}
                  </Typography>
                  
                  <Box display="flex" alignItems="center" mb={2}>
                    <Rating value={course.rating} precision={0.1} readOnly />
                    <Typography variant="body2" color="textSecondary" ml={1}>
                      {course.rating}
                    </Typography>
                  </Box>

                  <ChipContainer>
                    <Chip label={course.level} color="primary" size="small" />
                    <Chip label={course.duration} color="secondary" size="small" />
                    {course.tags.map((tag, idx) => (
                      <Chip key={idx} label={tag} variant="outlined" size="small" />
                    ))}
                  </ChipContainer>

                  <Box mt={3}>
                    <Button variant="contained" color="primary" fullWidth>
                      Enroll Now
                    </Button>
                  </Box>
                </CardContent>
              </CourseCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Courses;
