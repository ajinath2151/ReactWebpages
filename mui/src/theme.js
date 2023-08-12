import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary:{
            main:"#000",
            light:"green",
        },
        secondary:{
            main:"#FF0000",
            light:"purple",
        },
        otherColor: {
           main:"#808080",      
           "&:hover":{
            backgroundColor:"FF0000",
            color:"white",
          }
        }   
    }   
})