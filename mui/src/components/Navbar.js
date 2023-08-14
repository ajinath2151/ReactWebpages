import styled from '@emotion/styled'
import { Mail, Notifications, Storefront } from '@mui/icons-material'
import { Search as SearchIcon } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'



const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})

const Search = styled("div")(({theme})=>({
  backgroundColor:'white',
  padding:"0px 10px",
  borderRadius:'10px',
  width:'40%',  
  display: 'flex',
  alignItems: 'center',
}))
const Icons = styled(Box)(({theme})=>({  
  display:'none',
  gap:'12px',
  alignItems:'center',
  
  // [theme.breakpoints.up('sm')]: {
  //   display:'flex',
  // },
  
}))
const UserBox = styled(Box)(({theme})=>({  
  display:'flex',
  gap:'10px',
  alignItems:'center',  

  // [theme.breakpoints.up('sm')]: {
  //   display:'none',
  // },

}))


const Navbar = () => {
  return (
    <AppBar position='sticky'>
      {/* toolbar having some default padding  */}
      <StyledToolbar>
         <Typography variant='h6' sx={{display:{xs:"none", sm:'block'}}}> TCS </Typography>
         <Storefront sx={{  display:{xs:"block", sm:'none'}}} />
         <Search sx={{display:'flex', alignItems:'center'}}> <SearchIcon sx={{color:'black'}} /><InputBase  placeholder='Search here..' /></Search> 
         <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar sx={{width:30,height:30}} alt='person image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUngY1ywbCLCQWQtNPOj2hzrXag7Q3DXKTQ&usqp=CAU' />
         </Icons>
         <UserBox>
            <Avatar sx={{width:30,height:30}} alt='person image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUngY1ywbCLCQWQtNPOj2hzrXag7Q3DXKTQ&usqp=CAU' />
            <Typography variant='span'>Abdul kalam</Typography>
         </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
