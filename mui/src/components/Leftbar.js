import { AccountBox, Article, Brightness3, Group, Home, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Leftbar = () => {
  return (
    <>
    {/* box is like div */}
    <Box         
    flex={1} 
    p={2}        
    sx={{display:{xs:"none", sm:'block', borderRight:'1px solid #95908e'}}}
    >  
    <Box position={'fixed'}>
       
      <List>
        <ListItem disablePadding>
          <ListItemButton components='a' href='#'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton components='a' href='#'>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton components='a' href='#'>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton components='a' href='#'>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="MarketPlace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton components='a' href='#'>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton components='a' href='#'>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton components='a' href='#'>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton components='a' href='#'>
            <ListItemIcon>
              <Brightness3 />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>   
    </Box>
    
    </>
  )
}

export default Leftbar
