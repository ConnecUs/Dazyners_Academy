import React, { useState } from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';

const LayoutRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.default,
  minHeight: '100vh',
}));

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: 240,
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  left: theme.spacing(2),
  zIndex: theme.zIndex.drawer + 2,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <LayoutRoot>
      <MobileMenuButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </MobileMenuButton>
      
      <Sidebar
        open={!isMobile || mobileOpen}
        onClose={handleDrawerToggle}
      />
      
      <MainContent>
        {children}
      </MainContent>
    </LayoutRoot>
  );
};

export default Layout;
