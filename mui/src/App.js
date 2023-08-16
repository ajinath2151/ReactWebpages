
import { Box, Stack } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/Add';

function App() {


  return (
    <>
    <Box>
      <Navbar />
      {/* stack is like container to manage item vertically or horizontally */}
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>        
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
        <Add />
    </Box>    
    </>
  );  
}

export default App;
