import { Button } from '@mui/material'
import React from 'react'

const SXstyleExample = () => {
  return (
    <div>
      <Button variant='contained' sx={{color:'orangered', backgroundColor:'black', '&:hover': {backgroundColor:'green'}}}>MUI button with sx style</Button>
    </div>
  )
}

export default SXstyleExample
