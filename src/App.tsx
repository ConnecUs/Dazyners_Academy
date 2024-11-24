import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Certification from './pages/Certification';
import Resources from './pages/Resources';
import Community from './pages/Community';
import Friends from './pages/Friends';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/Dazyners_Academy">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/community" element={<Community />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
