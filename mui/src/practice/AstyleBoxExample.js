import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';

// Define a theme
const theme = createTheme();

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  color: 'yellow',
  backgroundColor: 'green',
  [theme.breakpoints.down('sm')]: {
    color:'red',
    backgroundColor:'black',
  },
}));

const AstyleBoxExample = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <StyledBox>
          Direct style for box components
        </StyledBox>
      </div>
    </ThemeProvider>
  );
};

export default AstyleBoxExample;
