import { Avatar, Box, Fab, IconButton, Modal, TextField, Tooltip, Typography, styled } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',    
})
const UserBox = styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    marginBottom:'20px',
})
const Add = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
    <Tooltip title="Add" onClick={e=>setOpen(true)}>
      <IconButton sx={{position:'fixed', bottom:10, left:{xs:"calc(50% - 30px)",md:10}}}>
          <Fab color="primary" aria-label="add">
        <AddIcon />
        </Fab>
        </IconButton>
    </Tooltip>
        <StyledModal        
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={{height:280, width:400, backgroundColor:'white', p:3, borderRadius:5, border:'5px solid red',}}>
                <Typography variant='h6' sx={{textAlign:'center', color:'gray'}}>Create Post</Typography>
            <UserBox>
                <Avatar sx={{width:30,height:30}} alt='person image' src='https://nationaltoday.com/wp-content/uploads/2022/11/456841356-min.jpg' />
                <Typography variant='span'>Ratan Tata</Typography>
            </UserBox>    
            <TextField
                sx={{width:'100%'}}
                id="standard-multiline-static"                
                multiline
                rows={2}
                placeholder="what's on your mind"
                variant="standard"
            />     
            </Box>
    </StyledModal>
  </>
  )
}

export default Add
