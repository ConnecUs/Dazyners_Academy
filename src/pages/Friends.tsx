import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  IconButton,
  Chip,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import TwitchIcon from '@mui/icons-material/Gamepad';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const MotionBox = motion.div;

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 24px ${theme.palette.primary.main}22`,
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    },
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 240,
  transition: 'transform 0.3s ease-in-out',
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  '&:hover': {
    transform: 'scale(1.1)',
    color: theme.palette.primary.light,
  },
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: '#e91e63',
  color: 'white',
  fontWeight: 'bold',
  '&.online': {
    backgroundColor: '#4caf50',
  },
}));

const Friends = () => {
  const friends = [
    {
      name: 'Feisty_Fenix',
      role: 'Twitch Partner',
      image: 'https://placehold.co/400x240/1a237e/ffffff?text=Feisty_Fenix',
      description: 'Variety streamer and content creator. Join our amazing community for epic gaming moments and great conversations!',
      status: 'Live',
      links: {
        twitch: 'https://twitch.tv/Feisty_Fenix',
        youtube: 'https://youtube.com/@Feisty_Fenix',
        website: 'https://feistyfenix.com',
      },
      tags: ['Variety Gaming', 'Community', 'Entertainment'],
    },
    // Add more friends here as needed
  ];

  const streamSchedule = [
    { day: 'Monday', time: '7 PM - 11 PM EST' },
    { day: 'Wednesday', time: '7 PM - 11 PM EST' },
    { day: 'Friday', time: '7 PM - 11 PM EST' },
    { day: 'Saturday', time: 'Special Events' },
  ];

  return (
    <Container>
      <Box mb={6}>
        <Typography variant="h2" gutterBottom>
          Friends of Dazyners
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Meet our amazing content creator friends and partners
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {friends.map((friend, index) => (
          <Grid item xs={12} md={6} key={index}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StyledCard>
                <Box sx={{ position: 'relative' }}>
                  <StyledCardMedia
                    image={friend.image}
                    title={friend.name}
                  />
                  <StatusChip
                    label={friend.status}
                    className={friend.status.toLowerCase() === 'live' ? 'online' : ''}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    {friend.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {friend.role}
                  </Typography>
                  <Typography color="textSecondary" paragraph>
                    {friend.description}
                  </Typography>
                  
                  <Box mb={2}>
                    {friend.tags.map((tag, idx) => (
                      <Chip
                        key={idx}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>

                  <Box display="flex" gap={1} mb={3}>
                    <Link href={friend.links.twitch} target="_blank" rel="noopener noreferrer">
                      <SocialButton>
                        <TwitchIcon />
                      </SocialButton>
                    </Link>
                    <Link href={friend.links.youtube} target="_blank" rel="noopener noreferrer">
                      <SocialButton>
                        <YouTubeIcon />
                      </SocialButton>
                    </Link>
                    <Link href={friend.links.website} target="_blank" rel="noopener noreferrer">
                      <SocialButton>
                        <LanguageIcon />
                      </SocialButton>
                    </Link>
                  </Box>

                  <Typography variant="h6" gutterBottom>
                    Stream Schedule
                  </Typography>
                  <Grid container spacing={1}>
                    {streamSchedule.map((schedule, idx) => (
                      <Grid item xs={12} key={idx}>
                        <Box display="flex" justifyContent="space-between">
                          <Typography variant="body2" color="textSecondary">
                            {schedule.day}
                          </Typography>
                          <Typography variant="body2">
                            {schedule.time}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Box mt={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      href={friend.links.twitch}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<TwitchIcon />}
                    >
                      Watch Live on Twitch
                    </Button>
                  </Box>
                </CardContent>
              </StyledCard>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Friends;
