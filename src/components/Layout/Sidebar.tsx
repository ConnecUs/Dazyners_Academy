import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PeopleIcon from '@mui/icons-material/People';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  margin: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}11`,
    transform: 'translateX(8px)',
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
      transform: 'scale(1.2) rotate(5deg)',
    },
    '& .MuiListItemText-primary': {
      color: theme.palette.primary.main,
      transform: 'translateX(4px)',
    },
  },
  '& .MuiListItemIcon-root': {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    minWidth: '40px',
    color: theme.palette.text.secondary,
  },
  '& .MuiListItemText-primary': {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    color: theme.palette.text.primary,
  },
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const SidebarFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  marginTop: 'auto',
  textAlign: 'center',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  color: theme.palette.text.secondary,
  '&:hover': {
    transform: 'translateY(-4px) scale(1.1)',
    color: theme.palette.primary.main,
    backgroundColor: `${theme.palette.primary.main}11`,
  },
}));

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Courses', path: '/courses', icon: <SchoolIcon /> },
    { text: 'Certification', path: '/certification', icon: <WorkspacePremiumIcon /> },
    { text: 'Resources', path: '/resources', icon: <LibraryBooksIcon /> },
    { text: 'Community', path: '/community', icon: <GroupIcon /> },
    { text: 'Friends', path: '/friends', icon: <PeopleIcon /> },
  ];

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'http://github.com/connecus', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: '#', label: 'LinkedIn' },
  ];

  return (
    <StyledDrawer
      variant="permanent"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <SidebarHeader>
        <Typography variant="h6" color="primary" align="center">
          Dazyners Academy
        </Typography>
      </SidebarHeader>

      <List>
        {menuItems.map((item) => (
          <StyledListItem
            key={item.text}
            onClick={() => navigate(item.path)}
            disablePadding
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>

      <SidebarFooter>
        <Typography variant="subtitle2" color="textSecondary">
          Connect with us
        </Typography>
        <SocialIcons>
          {socialLinks.map((link) => (
            <SocialIconButton key={link.label} size="small">
              {link.icon}
            </SocialIconButton>
          ))}
        </SocialIcons>
      </SidebarFooter>
    </StyledDrawer>
  );
};

export default Sidebar;
