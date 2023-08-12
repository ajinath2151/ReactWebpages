
import { Box, Stack } from '@mui/material';
import './App.css';
import Feed from './components/Feed';
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar';
// import Navbar from './components/Navbar';

function App() {


  return (
    <>
    <Box>
      {/* <Navbar/> */}
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>        
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>    
    </>
  );  
}

export default App;
