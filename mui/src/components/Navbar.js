// import styled from '@emotion/styled'
import { Mail, Notifications } from '@mui/icons-material'
import { Search as SearchIcon } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';


// whole content of app bar is instide StyledToolbar
const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})
// ./ whole content of app bar is instide StyledToolbar

// search textbox and icon of app bar / navbar
const Search = styled("div")(({theme})=>({
  backgroundColor:'white',
  padding:"0px 10px",
  borderRadius:'10px',
  width:'40%',  
  display: 'flex',
  alignItems: 'center',
}))
// search textbox and icon of app bar / navbar
// for big screen right side icon style
const Icons = styled(Box)(({theme})=>({  
  display:'flex',
  gap:'15px',
  alignItems:'center',
  [theme.breakpoints.down('sm')]: {
    display:'none',
  },    
}))
// ./ for big screen right side icon style
// for small screen xs right side icon style
const UserBox = styled(Box)(({theme})=>({  
  display:'none',
  gap:'10px',
  alignItems:'center',  
  [theme.breakpoints.down('sm')]: {
    display:'flex',
  },  
}))
// ./ for small screen xs right side icon style


const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    // app bar / navbar     
    <AppBar position='sticky'>
      {/* toolbar having some default padding  */}
      {/* showing company name search bar and rightside content inside StyledToolbar for small and big screen */}
      <StyledToolbar>
         <Typography variant='h6' sx={{display:{xs:"none", sm:'block'}}}> TCS </Typography>
          <Avatar sx={{width:30,height:30, display:{xs:"block", sm:'none'}}} alt='tcs_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9AadNHQhLzWdn6cJXt9abVHd0BoUUCpzc2pd_FlHJQP-maRVmMzXkWaIrJa71feyi9rE&usqp=CAU' />         
         <Search sx={{display:'flex', alignItems:'center'}}> <SearchIcon sx={{color:'black'}} /><InputBase  placeholder='Search here..' /></Search> 
         {/* for full/big screen mail, notification and avatar  */}
         <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar 
              sx={{width:30,height:30}} 
              alt='person image' 
              src='https://nationaltoday.com/wp-content/uploads/2022/11/456841356-min.jpg' 
              onClick={e=>setOpen(true)} 
            />
         </Icons>
         {/* for full/big screen mail, notification and avatar  */}
         {/* for small screen avatar and Typography */}
         <UserBox onClick={e=>setOpen(true)} >
            <Avatar sx={{width:30,height:30}} alt='person image' src='https://nationaltoday.com/wp-content/uploads/2022/11/456841356-min.jpg' />
            <Typography variant='span'>Ratan Tata</Typography>
         </UserBox>         
         {/* ./ for small screen avatar and Typography */}
      </StyledToolbar>
      {/* showing company name search bar and rightside content inside StyledToolbar for small and big screen */}
      <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
         >
          <MenuItem onClick={e=>setOpen(false)}>Profile</MenuItem>
          <MenuItem onClick={e=>setOpen(false)}>My account</MenuItem>
          <MenuItem onClick={e=>setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
    // ./app bar / navbar 
  )
}

export default Navbar
