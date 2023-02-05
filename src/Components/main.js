import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import AddStudent from './AddStudent';
import ManageStudent from './ManageStudent';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

import { useRecoilState } from 'recoil';
import { loginState } from '../StateAtoms/loginAtom';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DrawerMain() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState(0);
  const [login, setLogin] = useRecoilState(loginState);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex',
      // backgroundColor: 'green',
    
    }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}
      sx = {{
        backgroundColor: '#fffcfb',
        boxShadow: 'none',
      }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }), color : '#f33823' }}
          >
            <MenuIcon />
          </IconButton>
          {!open ? <Typography variant="h6" component="div" sx={{ color : '#847878',
          width: 'fit-content',
        }}>
            LOGO
          </Typography> : <Typography></Typography>
          }
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              // backgroundColor: 'red',
              width: '300px',
              border: '1px solid white',
              borderRadius: '5px',
              ml : 'auto',
              mr : '20px',
              // backgroundColor: 'yellow',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                width: '300px',
                padding: '5px 14px',
                verticalAlign: 'center',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                // border: '1px solid black', 
                boxShadow: '0px 0px 3px 0px grey', 
                borderRadius: '5px',
                // backgroundColor: 'green',
              }}
            >
              <Avatar src="/broken-image.jpg" />
              <Typography  component="div" 
              sx = {{
                color : '#847878',
                fontSize : '14px',
              }}
              >
                {login.loggedIn ? login.email : 'User'}
              </Typography>

            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            border : 'none',   
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Add Student', 'Manage Student', 'Logout'].map((text, index) => (
            <ListItem key={text} disablePadding
            sx = {{
              backgroundColor : tab === index ? '#fffcfb' : '#fffcfb',
              color : tab === index ? 'white' : '#514949',
            }}
            >
              <ListItemButton
                onClick={
                  () => {
                    setTab(index);
                  }
                  
                }
                sx = {{
                  '&:hover': {
                    backgroundColor : '#f33823',
                    color : 'white',
                  },
                  margin : '2px 4px',
                  backgroundColor : tab === index ? '#f33823' : '#fffcfb',
                  borderRadius  : '5px',
                }}
              >
                <ListItemIcon
                sx = {{
                  // '&:hover': {
                  //   backgroundColor : '#f33823',
                  //   color : 'white',
                  // },
                }}
                
                >
                  {/* {index % 2 === 0 ? <PersonAddAltIcon /> : <ManageAccountsIcon />} */}
                  {
                    index === 0 ? <PersonAddAltIcon 
                      sx = {{
                        '&:hover': {
                          color  : 'white',
                          // backgroundColor : 'green',
                        },
                        color : tab === index ? 'white' : '#514949',
                      }}
                    
                    /> : index === 1 ? <ManageAccountsIcon
                      sx = {{
                        '&:hover': {
                          color  : 'white',
                        },
                        color : tab === index ? 'white' : '#514949',
                      }}
                    /> : <LogoutIcon />
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}
      sx = {{
        backgroundColor : '#fffcfb',
      }}
      >
        <DrawerHeader />
        {
          tab === 0 ? <AddStudent /> : tab === 1 ? <ManageStudent /> : setLogin({loggedIn : false, email : ''})
        }
      </Main>
    </Box>
  );
}
