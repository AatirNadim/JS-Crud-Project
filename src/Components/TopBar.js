import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

import { useRecoilState } from 'recoil';
import { loginState } from '../StateAtoms/loginAtom';

export default function TopBar() {
    const [login, setLogin] = useRecoilState(loginState);
    console.log(login);
    return (
        <Box sx={{
            flexGrow: 1,
        }}
        >
            <AppBar position="static"
                sx={{
                    background: "#f50057",
                    color: "white",
                }}
            >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Logo
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            // backgroundColor: 'red',
                            width: '200px',
                            border: '1px solid white',
                            borderRadius: '5px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                                width: '100%',
                                padding: '5px',
                                verticalAlign: 'center',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <Avatar src="/broken-image.jpg" />
                            <Typography variant="h6" component="div" >
                                {login.loggedIn ? login.email : "Not Logged In"}
                            </Typography>

                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}