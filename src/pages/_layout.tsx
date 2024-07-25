import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AdbIcon from '@mui/icons-material/Adb';
import { theme } from '../utils/theme';
const RootLayout = () => {
    return (
        <Container>

            <AppBar >

                <Toolbar>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            flexGrow: 1,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Example
                    </Typography>
                    <Stack direction={'row'} spacing={10} justifyContent={'center'} alignItems={'center'}>
                        <Button variant="text" color='inherit'>Home</Button>
                        <Button variant="text" color='inherit'>About us</Button>
                        <Button variant="text" color='inherit'>Login</Button>


                    </Stack>

                </Toolbar>
            </AppBar>
            <Box sx={theme.mixins.toolbar} />

            <Outlet />
        </Container>
    )
}

export default RootLayout
