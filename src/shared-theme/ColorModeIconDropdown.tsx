import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useColorScheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  border: 'none',
  padding: '4px',
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export default function ColorModeIconDropdown() {
  const { mode, setMode } = useColorScheme();
  const isDarkMode = mode === 'dark';

  const handleToggle = () => {
    setMode(isDarkMode ? 'light' : 'dark');
  };

  return (
    <Box>
      <StyledToggleButton
        value="check"
        selected={isDarkMode}
        onChange={handleToggle}
        aria-label="toggle dark mode"
      >
        {isDarkMode ? (
          <DarkModeIcon fontSize="small" />
        ) : (
          <LightModeIcon fontSize="small" />
        )}
      </StyledToggleButton>
    </Box>
  );
}
