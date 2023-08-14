import { Box } from '@mui/material'
import React from 'react'

const Leftbar = () => {
  return (
    // box is like div
    <Box 
    bgcolor={'orangered'} 
    flex={1} 
    p={2}        
    sx={{display:{xs:"none", sm:'block'}}}
    >
      Leftbar
    </Box>
  )
}

export default Leftbar
