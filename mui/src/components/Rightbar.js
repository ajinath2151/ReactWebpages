import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box      
    flex={2} 
    p={2}
    // this is for hide rightbar for sx , show for sm and again hide for md
    // sx={{display:{xs:'none', sm:'block', md:"none"}}}
    sx={{display:{xs:'none', sm:'block'}}}
    >
      <Box position={'fixed'} width={400}>
        <Typography fontWeight={500} >Online Friends</Typography>
        <AvatarGroup max={4} sx={{paddingRight: '248px'}} >
          <Avatar   
            alt="Rajesh Gopinathan" 
            src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/03/20212655/TCS-CEO-Gopinathan-COO-Subramaniam-reappointed-for-5-years.jpg" 
          />
            <Avatar 
              alt="Rajesh Gopinathan" 
              src="" 
            />
          <Avatar 
            alt="Mohit Joshi" 
            src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202303/download_7-sixteen_nine.jpg?size=948:533" 
          />
          <Avatar 
            alt="Ajay Vij " 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAPztcHlW77RiZgW0qhgVpdJVDrgiLmfp1Q&usqp=CAU" 
          />
          <Avatar 
            alt="Ashwin Yardi" 
            src="data:image/jpeg;base64,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" 
          />
          <Avatar 
            alt="Thierry Delaporte" 
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGBgaGBgZGBgYGhgYGBgYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQlJCw0NDY2NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAAABwEAAAAAAAAAAAAAAAAAAQIDBAUGB//EAD4QAAIBAgUBBgQEBQIEBwAAAAECAAMRBAUSITFBBiJRYXGBEzKRoVKxwfAUQtHh8QdiI3KSshUWJGNzosL/xAAaAQACAwEBAAAAAAAAAAAAAAAABQECBAMG/8QAJxEAAwACAgICAgICAwAAAAAAAAECAxEEIRIxQVEFIhMyFEJhcaH/2gAMAwEAAhEDEQA/AKgCGBCEVFQy0FBDgEA0CCHBaAaBBBDAgGgWhw4IEggtDgkaAKFDtFBDuLbi5PtzIAReJIi7QjJQCBAF3hlYSDcSxD9F7hh3RJAjOH4EeEZz6Fj9i1jixAirwAWIsSDWxqpGKucKOJV1K9s51kmfbJmJxipzGa2YgjumVGIfXvFYDC2O8y3yfFM4q6uvGfRY0btYmTHxFhYSNqAjbtFP+Tkqn4/I3w8VJft7H0xRHPEjDOA1TQDsOZV5vmQVbLzMuMQwJIMZcerS/ZjLFwJuW2tfR0nF57Sp2BbeTsFidYuBtOX4M6nDOb+s3mAzhNkTczfHlW2YOZxYwSku2X0EJDcXipfQtBaC0MCGYBoTaFaLIhWgGjnghwgIoRSNgoYhwoAHBBDAgwCAhiAiGBAAAQ4LRVoAFaOUqDNvpNrgEgcXkzKctes4VVJH8x4AHrOi5VkKIo1d42te1v8AM648Trv4OWTKp6+TCjs5UddVOz2/CR9COh+0awuVVQ9npsO6wuQbG6kDvCdWSiijYCN1Kq8WHnNC48+zP/NRz7E9mKhRSi94hdVzzZQLD3vGH7L1lsAjOx5PCL+pM6IK4HAHrFLXPjLfwSyFmpI5Lj8qqURdxb7fY8yCg7wna27w7wB9Rf8AMSozLJ6NQbooPiLAj0Mo+N3uWW/netNGIojaOrLDGZO6fLdl9ryCBNJnFCN4gjSd7R0TOZ07g7NYSl14o5Zb8Z3oj4lzqIJuISkdZWO7A3vHKeIFuZlqW+xfNO60kX2H0gXJkDMs3CbLIrMzDY2Eh18MBuTMyhOv2ex3x8Dmd6JS540Tjc9NrCUdfFKODK6rX1TXHGj3o2Tbntss6mN1m5MUGEpl2jyYgiaceBOjWvyfhOmi0apaWPZ7HhH73EpFuZOw+XM/SOcfGhTpnnuZz6y3tvo6vg8cjgWYSaJzfKaD03F2NvCdBwVS6iYs+B4+/g44eRORtL2iSIIIJnNAcK0EEAOdiHCEOKBsGIdoQEVaABWioUOQwBaAQWgkAHJuV4I1Ht/KPmPlIQmhyoqqbcnk+P8AadsUqq7KZK8Z6NXl2hFCIAAPP895cJj1tYzIDHKilmIA8Zn8T2mZmtTBH+4339ptdTC7MsYryPSOl1MWDItTFCYbD5xV6kCSDm7nkXPiJzXIn7O3+Ja+DTtixEpmQHWZLEY9zwDIFTMnB7wI85dZ5Kvi2dFo5sp5P0j7VlIuDMDl2Z94Dby4msoOWW/79x0nSaT7RwuHL0ywDgixlNmuW8ug8yP1EmrUtz9o7Rq325Euuzm0YPNKjKt1MzNbEs53M3PaXCqg1fyte3kfCY9aIvsJkzvxfZizy6rSZGqWI4kSlhbmWeIpWETRWwmWs2p/U38Li/7URsRUCLczOY/HlzYcSXnOKudMq0SaMEJLyr2MnLp+K9EdkMUlOS0pwVLKJtjdPSKZsExO6ZEbaNiLfeOUqJmmYciy7TND2bwWvczVOqoLAbzN9nnKjmW1Z7xjiiqSbEfKzfs5QfxTe822V1LoPSYXDoNQ1cXm7y1l0DSJx5y1KWjp+OX7PsmQ4IcVDgKCHBJA5yIsRMMRQNhUEEEhgCHBAJAAhwGHLEhCWOGxHdtK+L+KFRydtuZfDWqOeRbkj4zENXfQCAqmx3sCfCWuBy1rbAH6ygpoHQcLb5So7xPUydl+aVKT98sAbBWINrj+sMjVvtmnDNRKSReU8KQe9sPP+0l0qaA2vc+AU8esewuZB1BsDc+HEj5lixfew2tOKlfZodPXom/DW3yj6iVePwZf5UI9Rt9pSvjKzHuVHUXPhaS6b1+XqEjxTY+/SXcrXs5KqT9FRicK6NqGxBv/AJmuyHNi6A9QNweR4jzH78JSYvFIw0HUT0ZiL/W28Yy2voew3sdx5dfed8FOXps4cmFU7SN6lUHfpFB7G/v7j+0rsJXBGxjzvb98RhIrY7nFAVaLrz/MPG672+kx1DDWmso1Tt9/of7zNs0VflK8Ute2TiwK62yszNJWVsRpWWuPHdvMjjsTe4mfiy6nscYsSRXYqpqYmLpLGGG8cDgCOIxutJFf5ZxbbHHa0iVGvCqVSY5SpkxpixqVpCXk8h5Ht+heGo3kwoAI7h6IA3hrT1Gw4muY6FlZdt/RMyqmRvLMmM4enpEWVJ6zXK8Z0LMj8qbJOW1F1jWNpvcGF0jSJkskyw69RsR0mypoALRTzsiqtIa8DG0nWhyCCCLxgCCCCCLHOoYhCHFI0DhiAQ5UAQ4QhiAB3ggggSCRcxb/AIbAeElGRqwJ26Ei/wBDLS9PYa30UuEq4g3NAKWUgWYAix62baaPHYKrpQ9xiVu+hQiejpewbzBkbDME7hpsWvtZRv7mW+Ey9wVaoQpYgKl7kDxbz8pZ5VrWjTOGt72/+iz7J5e6U2Z+pOkc2XpvM/m3xGYkAkXJIXoAf6Te1mWnSA1ciUgVKilEa3NiNiD4gznT00XhOk2Y7/x2tS0j4BZXJsB3V26A839ZZ4jMwLXpmmxALISLm4v3SOT5H/L2GxDI5p120sOL8MOjLcWIhZlUwxFnUuw4ItsfadKceOtdlJm/Le+irbF6iRfYWsTHCTYMNiN5KwuVgoWsQOl+Y49MKLTn5d9F/He9k/C1GGkqdiL/AJS5R7gSopLpRdrDYb9DYf4j9LMaSLdnUDYcjwv+saTSS7ElS3X6olYl9KN6WHuf6XlFUewuZcPUVwCNwRf6zNdqK2hbKeZi5XGeWlTfSNHEpefhrtlXnGYg91Zm64j5v1gZNt50wYtamR5cxEFe7RnVeP1luYytI3jiMLlbZ5fkZldNbHKFG53lrRpACDLsvZt7bS0bA2EYYY2hNnzry8dkKnhy0nYfDhYdAW2jhaa5lIx3dPr4FiWeW5UzncEDxldSVie6LzaZGX0DUtjM3LzPHP6+y3GwrJen6H8uy74YtcmWMEOJKt29sfRjmJ8Z9Ah2gtBKlwQQQWgVOdQQocUjYVaCAQSoAi7xMO8AAIZMTDgSGZHqk8DrH5HqvZh6E/Qj+sH6Lx/ZFzgFSigdwWY9QLkA8c9JCx+dFHR3TuFu6eoA6kefjHqeJBUaiNN9/QDeR8xz7BuAhbfi5HdB6b+EiJ2/WzddKV7DxvaxSQAhYADa4sfc7R3C5w1Zl+ClmTvMBawA5Fxtcyty9sEx01K63v5hfrbebDAfw9NP+Fo0nqljf3nSkl8FZoeBp4imGYAn7gyqqsaZsEU+DBVBjqVgjPp4LEj3Nz9zI1XFl+7acKbLqUh58YCtjzKuqhBDWJF97eHWPOAo35jiuCDCHplbXRFzXFa1VVB0Lu1uptsD57E+8q62FuFsN+gHmPAyxWm5OkIfhhtTN0NtrfnJDUwtgu1hv154W/iBz6zT5O6SM8qcUOvon4AaUVfAAQ8RlqOdTi9ozhmlnT4jBStaEvnSp0umYXtBoR7AWmdrYjVxxNd2ly5qjgIvXcyixeTshA5J6TZx5hPbLZ+VkqFKKlFuZPw2FGoS9y3ss7WZth4R7H5Z8NlsOvSbFmiq8UK8iqZdCqagAACM1ZoMsy7Ut2EbOSlmPQTtPIiaafwK1x8tarXszVCkWbSOZa4fI3J32k/AZGyVdR3E1K0h4Thm5mnqfRtxcR0t10VuU5QKfO8uALQhDi68lW90MseOcc6SFQQExOtfETmdBYghK0OSVBBBBADnMAMSIYijQ2FAw7xBMMGToBUVG4q8qAuCJvBeBId5Cx76SjHi5B9/8SZI2Nph1Knr9j0MlEqvF7Bmfw3phUFmO91J4636WlNQq/DGg0kccjUAfffmSssqBH0v123/ACl/Sy+gxJLd3wkzXh0akvN7XsziYskFBQpqDzZF3Prbb2j+FwDodSOU3F1BJFvQzWUMuwy/Lbf8RjOIp0F49YVlb9F1jT9kvCPS0DUd/wAz6Rt3UA2taZzF1rN3D3SePA/0jdXFOBa85OG2W8kkWWIqDVzEHFgAkeF9pRHEE9TF0nOlvS06xi2zPkz6nZqsNj6Tog2Y2HA4NvtvEPUubmw8ANgBMdjc7+EFopbchnPUeUmZrmpFEMvNpuxYJh7FuflVlXjrSNbhWB4k04tE+ZgPWYjsTmhclXNzLTtbSUqFBOo+BncyGjbG0gNVxbxkNMVhnfZgTK0YAJhe9udP6TFdlBfE+/6mTtoqdVxuZpRW7bL4ynParDO1l7x8t4fbAD+HO38sx3YGmpclrc9YbafQNbRsq/a1KY7yMo8bSwwXaBKqaqe/pKXtliqJplFALWsABcyD2Myl0pszgi+9obew6HsX27ZH0CmS17S2TMsW6a1QDa9pzvGEfxu/4p0XEdoqVGgNR5EAKrAdtH+N8Kqmk3t4ibLFZmiU9bG215zDJKAxWK+LewB2Euv9QKrJSCA7HaQAunn+IxdQpQ7qA2LH9JbVuz1fRf476pA/03oqKYPWbxuDDQHL6HaTEYauKVY6lvYN/WdIwGKFRAw6icm7fkGuoHN50XskjCit/wAIkosX0EEFoFTm5MF4V4IpGwd4BCh2gAd4YMTDkaAO8O8KASQDvGqxjkZrQAqc1o3Gscjn08fUSDQxbr/NtJ+IxAepToKbl3VXt0S41C/QkXjOYYE0qrIeOUP4kPB9entNKh+O2ik5dVpMWmMc8P8AnEmrUOxMYRLbiTAlwCDObSRqVOl7Cogje8J3JMWluphVWA4Mr87D40JYWEsslyxq+pdwulgWG2liDpt53sfaM5NldTEPZdkHzuRsPIeJ8pvnp0sJh2a1kpqWPixHj4kma8OJ/wBmYeTnlfqvZw/G4dwzq/zozK3npO/rLfKmFWkUPIErcTiWeo9RvmZmY+rG9vaWnZ7E0kfv3UN1AuB6jpNGjDsrcsxJw9ffod/0m1y+t/FVFfoJT5zkPxnDUXRgfBgdvYzZdmco+AgB5kEj+f8AdoMPIznXY4XxJ9f1M6fmuENRCg6zH5X2PrUamtX6wAuu2rWw5/5ZkuweFDsQT1m+zLKjXp6HPS0qcm7Hmg+pXPpeAF/RyKiDqK3PiZMxSBUIAttHEOkbmJasjAi8AOM1CP43vcap06plFKtQGwJtCfsvhnfWVGrxl1hMGtNdI4kgccs+CxO19N/PibfM8OmNod07229ZqcTldJzd0B9hHMNgqafKABIA5v2dxVbBNoqIxW+zAXE1GK7WApZEdmPkZo6qUyLkKYzhxSJ2VZIGDy7s1WxFf41cWF+6vh6zo2FoBFCjpCSut7CSLw9FQXgvExV4E6OZaooNGA8PVFehpsf1QapEqYpF+ZwPff6SBWztR8ilvM7D+stOOq9Iq8kz7ZdaoZaZarm1VuGC+g/UyJUqs3zMx9STOs8WvlnF8mfhGsq5jSXl19Abn7SLUz2mOAze1h95m7fvwgvOs8WV77OT5FP10W1btC/8iKPW7fbaV2LzOo4szbeA2Eis0Ydp1nFM+kc6yU/bLTspvjKN/wAZ/wCxp0rNspWslm2I+Vxyp/UeU5l2Za2LoH/3APqCP1nZ9Mu0VVa7RzPE4J6b6HHoRwR4gyOhKG38p6+E6RjcEjqQ4GkbknbTbrfp6zC4kYfcLiV032upZj/0zNeLXo34OQqWn7/4GFXxl9k3Zlqtne6p0/E/oOg8/wDMn9jMpw9UfE1iq6G2kqVCfhJQ7nyJ2m6TCS+LB/szlyOU0/FdFfgsIiKERQqjgD97mYL/AFNzm5XCodhZ6nryie3ze6zpGaV0w9F6z/KiFj524A8ybD3nAsXiXqO9R/mdmc+rG9vQcD0mp9LRgT29kMLHUWGF/dotR+95UuGqDf8AOOUczqoe5VdbdA7W+l4ziX0j7RrD0yxJPhADR4LtZiktd1cf71B+62MuMP22J+elbzRv0P8AWZBUAtFjrDSA6Bh+1tJjYkr/AMyn8xeWFLN9bAIQw8VII9JzANvHEqFbEEg35BIP1EjROzrz7pvzaRMNRADGxmHwXajEpsXDr4Puf+ob/nNJl3bDDsLVFNM+PzIfcC/2kNBsn01cOSOLRypVckDfzljh6iOodGVlPDKbgx3QPASCSsq1XA4Jia9ZgtybbS30iIq4dW2IgBVYGmWTkn1/tH6eCIJPjJ9Ggq7AR6AEDDYchrkSfDggABBBBADj/wDA1BxUHuJExdZ0OkuCSOnIl5eZHE1tTsT1J/OZMK867+DVmfiugqu5ENV/tG3O6+kcB/tNujGE0MLCUfvzimPSSAh4QG17w3kLU19uPtAB5jGrXiy3BiL/AJyGwJmUtavRYdKif9wndUFwPScMyqnetTA5Lrb67TtFXFaKWockAL6n+n6SUtoo3pmX7dYstTamjEKrKHsNnJaxQt0Av7kW6b474Souo+32Mus7qIzLTRju2p97qSONr7m55lRmOHdiiKLliFUcXJ2HPtMmalVqUx7wcbx4HdIRlud1qFZHofODbTyHXqrDqCB7WvO8ZHmSYikHUaW4dCQSj9VPiPPrMH2e7ECkmtzdyN/LyHlJ9Gq+Eb4ttKKp1j8Sck+o5H95sxY/GdCblZv5b2V3+rGc3KYRTttUqf8A4U/dvZZzkLJWZ45q9WpXf5nctbwHCr7KAPaRgIN7KStISU3/AF/rFqP3eC+3lGnZv5Le/SQWF10BUgkRBqAbL4fpIrqTuzFvy+kforvAB4dI6BGS24j68QBCW5i9WwiT+kZrvYDxvABdStzb/JkSq52jhG1vf1Mju9yIAbP/AE+zYpX+Cx7lQbDoHG4I9Rf7Tp04blmJFKtTqH+R1b2nRf8AzSx3CzpjwVl34nLJnnFrZrgYq8xp7Tv+ERJ7S1PKd1+PzHB8/H9M2sEw57Q1fERJz2t+KWX47L9oq/yMfTN3eDVMAc4rfjiGzWqf5zLL8Zf2ij/Iz8JnQdY8YWseInPDmFT8R+sR/Gv+NvrLL8ZXyyH+R+p/9KnOq5Smbct3frzMpSqfaCCJsH9R1n/sOu3y/vmPoYUE0GcWIRhwQAZqOOIw35GCCABE8wKN/WCCQBbZAn/qcP8A/Kg/+06R22rmiigHd9WkDkDbUfLkAH/d5QQSMjah6O3FhXnmWYTAUzqZmvc/bnb9+ckYtDcMLhgQR43BuD7H98wQRS6fmetmF/Fo7RlFYVaCVB/Oin3I3H1vMp/qljAmHSiPmqtv46EszfUlB7mCCOk34o8VklTlcr7ZyhjBeCCVLBFxAIIIAIqKvoYtF5gggAm24jqmCCAAZvykUOC31HjzBBABFd9I53kRWuYIIEr0Sqq289hL/JsSGQC+67H06QQTZwqay9GTlynjLGHBBHwlDBggggQKvBeCCCIBeHBBAD//2Q==" 
          />                    
        </AvatarGroup>
            <Typography variant='h6' fontWeight={500} mt={2}>Latest Photos</Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
              <ImageListItem>
                <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e' 
                alt='Breakfast' />              
              </ImageListItem>
              <ImageListItem>
                <img src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d' 
                alt='Burger' />              
              </ImageListItem>
              <ImageListItem>
                <img src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c' 
                alt='Coffee' />              
              </ImageListItem>
              <ImageListItem>
                <img src='https://images.unsplash.com/photo-1533827432537-70133748f5c8' 
                alt='Hats' />              
              </ImageListItem>
              <ImageListItem>
                <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62' 
                alt='Honey' />              
              </ImageListItem>
                <ImageListItem>
                <img src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6' 
                alt='Basketball' />              
              </ImageListItem>
            </ImageList>
            <Typography fontWeight={500} variant='h6' mt={2} >Latest Convertations</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/958064228/photo/portrait-of-happy-young-man.webp?b=1&s=170667a&w=0&k=20&c=ywaPLXj8meNw8tmZ3rOju5nrtlmhMwrQnjpW4nlqy_s=" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://media.istockphoto.com/id/1293903541/photo/young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=AvQGpGDrH-0nUNAL-uHuc1uidcTiiLbovyKJjsN_mOk=" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://i.pinimg.com/originals/30/84/83/30848343aa453d27d3393a37c0f8c2a2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar
