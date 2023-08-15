import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box 
    bgcolor={'gray'} 
    flex={2} 
    p={2}
    // this is for hide rightbar for sx , show for sm and again hide for md
    // sx={{display:{xs:'none', sm:'block', md:"none"}}}
    sx={{display:{xs:'none', sm:'block'}}}
    >
      <Box position={'fixed'}>

      Rightbar
      </Box>
    </Box>
  )
}

export default Rightbar
