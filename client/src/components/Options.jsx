import AddReactionIcon from '@mui/icons-material/AddReaction';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AppleIcon from '@mui/icons-material/Apple';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import VerifiedIcon from '@mui/icons-material/Verified';
import { AppBar, Box, Toolbar, Button, useMediaQuery } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import { useTheme } from '@mui/material/styles';
import { Grid,Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const Options = () => {
  const token = localStorage.getItem('token');
  const decoded = jwtDecode(token);
  const isAdmin = decoded?.roles === 'Admin';

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="default" sx={{ mb: 2 }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 1,
          alignItems: isMobile ? 'stretch' : 'center',
          justifyContent: isMobile ? 'center' : 'flex-start',
        }}
      >
       <Grid item xs={12}>
        <Box
      display="flex"
      alignItems="left"
      justifyContent="left"
     gap={1} // רווח בין הלוגו לטקסט
     marginBottom={2}
   >
     <img
        src={"images/Ellipse 50.png"}
         alt="לוגו"
        style={{ width: 25, height: 25, marginBottom: 8 }}
        />
        <Typography variant="h6" gutterBottom style={{ textAlign: 'left' }}>
          NutryPath
        </Typography>
        </Box></Grid>
        {isAdmin && (
          <Button
            variant="outlined"
            color="success"
            startIcon={<AddReactionIcon />}
            component={Link}
            to="/user"
          >
            User Options
          </Button>
        )}

        <Button
          variant="outlined"
          color="success"
          startIcon={<ReceiptLongIcon />}
          component={Link}
          to="/recipe"
        >
          Recipe
        </Button>

        <Button
          variant="outlined"
          color="success"
          startIcon={<AppleIcon />}
          component={Link}
          to="/nutritionLayout"
        >
          Menu
        </Button>

        <Button
          variant="outlined"
          color="success"
          startIcon={<ImageSearchIcon />}
          component={Link}
          to="/cookbook"
        >
          Cookbook
        </Button>

        <Button
          variant="outlined"
          color="success"
          startIcon={<VerifiedIcon />}
          component={Link}
          to="/bmi"
        >
          BMI
        </Button>
        
      </Toolbar>
    </AppBar>
  );
};

export default Options;
