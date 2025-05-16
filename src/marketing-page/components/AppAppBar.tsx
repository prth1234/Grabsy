import * as React from 'react';
import { styled, alpha, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Sitemark from './SitemarkIcon';

// Define keyframes animations
const subtleGlow = keyframes`
  0% {
    box-shadow:
      0 0 30px 10px rgba(0, 132, 255, 0.15),
      0 0 40px 10px rgba(255, 0, 128, 0.12),
      0 0 60px 20px rgba(0, 255, 200, 0.1);
    border-color: rgba(255, 255, 255, 0.15);
  }
  33% {
    box-shadow:
      0 0 35px 12px rgba(255, 0, 128, 0.18),
      0 0 45px 12px rgba(0, 255, 200, 0.15),
      0 0 70px 24px rgba(0, 132, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
  }
  66% {
    box-shadow:
      0 0 35px 12px rgba(0, 255, 200, 0.18),
      0 0 45px 12px rgba(0, 132, 255, 0.15),
      0 0 70px 24px rgba(255, 0, 128, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow:
      0 0 30px 10px rgba(0, 132, 255, 0.15),
      0 0 40px 10px rgba(255, 0, 128, 0.12),
      0 0 60px 20px rgba(0, 255, 200, 0.1);
    border-color: rgba(255, 255, 255, 0.15);
  }
`;

const shimmerBorder = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const ToolbarWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '2px',
  borderRadius: 'calc(24px + 2px)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'calc(24px + 2px)',
    backgroundImage: 'linear-gradient(135deg, rgba(0, 132, 255, 0.5), rgba(255, 0, 128, 0.5), rgba(0, 255, 200, 0.5), rgba(0, 132, 255, 0.5))',
    backgroundSize: '300% 300%',
    animation: `${shimmerBorder} 12s linear infinite`,
    zIndex: -1,
    padding: '1px',
    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude',
    WebkitMaskComposite: 'destination-out',
    pointerEvents: 'none',
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: '24px',
  backdropFilter: 'blur(24px)',
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.45)`
    : alpha(theme.palette.background.default, 0.45),
  boxShadow: `
    0 0 30px 10px rgba(0, 132, 255, 0.15),
    0 0 40px 10px rgba(255, 0, 128, 0.12),
    0 0 60px 20px rgba(0, 255, 200, 0.1)
  `,
  padding: '4px 8px',
  minHeight: '48px',
  animation: `${subtleGlow} 8s ease-in-out infinite`,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    borderRadius: '24px',
  },
  '&.Mui-selected': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    borderRadius: '24px',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: '20px',
  margin: '4px 8px',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    borderRadius: '24px',
  },
  '&.Mui-selected': {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
    borderRadius: '24px',
  },
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <ToolbarWrapper>
          <StyledToolbar variant="dense" disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
              <Sitemark />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <StyledButton 
                  variant="text" 
                  color="info" 
                  size="small"
                  onClick={() => handleItemClick('features')}
                  className={selectedItem === 'features' ? 'Mui-selected' : ''}
                >
                  Features
                </StyledButton>
                <StyledButton 
                  variant="text" 
                  color="info" 
                  size="small"
                  onClick={() => handleItemClick('testimonials')}
                  className={selectedItem === 'testimonials' ? 'Mui-selected' : ''}
                >
                  Testimonials
                </StyledButton>
                <StyledButton 
                  variant="text" 
                  color="info" 
                  size="small"
                  onClick={() => handleItemClick('highlights')}
                  className={selectedItem === 'highlights' ? 'Mui-selected' : ''}
                >
                  Highlights
                </StyledButton>
                <StyledButton 
                  variant="text" 
                  color="info" 
                  size="small"
                  onClick={() => handleItemClick('pricing')}
                  className={selectedItem === 'pricing' ? 'Mui-selected' : ''}
                >
                  Pricing
                </StyledButton>
                <StyledButton 
                  variant="text" 
                  color="info" 
                  size="small" 
                  sx={{ minWidth: 0 }}
                  onClick={() => handleItemClick('faq')}
                  className={selectedItem === 'faq' ? 'Mui-selected' : ''}
                >
                  FAQ
                </StyledButton>
                <StyledButton 
                  variant="text" 
                  color="info" 
                  size="small" 
                  sx={{ minWidth: 0 }}
                  onClick={() => handleItemClick('blog')}
                  className={selectedItem === 'blog' ? 'Mui-selected' : ''}
                >
                  Blog
                </StyledButton>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                alignItems: 'center',
              }}
            >
              <StyledButton color="primary" variant="text" size="small">
                Login
              </StyledButton>
              
              <ColorModeIconDropdown />
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
              <ColorModeIconDropdown size="medium" />
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    top: 'var(--template-frame-height, 0px)',
                  },
                }}
              >
                <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>

                  <StyledMenuItem onClick={() => handleItemClick('features')} selected={selectedItem === 'features'}>
                    Features
                  </StyledMenuItem>
                  <StyledMenuItem onClick={() => handleItemClick('testimonials')} selected={selectedItem === 'testimonials'}>
                    Testimonials
                  </StyledMenuItem>
                  <StyledMenuItem onClick={() => handleItemClick('highlights')} selected={selectedItem === 'highlights'}>
                    Highlights
                  </StyledMenuItem>
                  <StyledMenuItem onClick={() => handleItemClick('pricing')} selected={selectedItem === 'pricing'}>
                    Pricing
                  </StyledMenuItem>
                  <StyledMenuItem onClick={() => handleItemClick('faq')} selected={selectedItem === 'faq'}>
                    FAQ
                  </StyledMenuItem>
                  <StyledMenuItem onClick={() => handleItemClick('blog')} selected={selectedItem === 'blog'}>
                    Blog
                  </StyledMenuItem>
                  <Divider sx={{ my: 3 }} />
                  <StyledMenuItem>
                    <StyledButton color="primary" variant="contained" fullWidth>
                      Sign up
                    </StyledButton>
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <StyledButton color="primary" variant="outlined" fullWidth>
                      Sign in
                    </StyledButton>
                  </StyledMenuItem>
                </Box>
              </Drawer>
            </Box>
          </StyledToolbar>
        </ToolbarWrapper>
      </Container>
    </AppBar>
  );
}