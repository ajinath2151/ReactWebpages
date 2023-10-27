import { Button, TextField } from '@mui/material'
import React from 'react'

const PDF_Viewer = () => {
  return (
    <div>
      <h1>PDF Viewer..</h1>      
      <TextField id="outlined-basic" label="" variant="outlined" type='file' /> <br />
      <Button type='submit' variant='outlined'>View PDF</Button>
    </div>
  )
}

export default PDF_Viewer
