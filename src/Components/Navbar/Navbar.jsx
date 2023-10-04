import { Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import LoginButton from '../Card/LoginButton/LoginButton';
import LogoutButton from '../Card/LogoutButton/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import Login from '../Card/loginProtect';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            <nav>
                <Typography variant='h4' sx={{ fontWeight: '600', color: 'black' }} className='h4'>
                    Learning<span style={{ color: '#0077FF' }}>Skills</span>.
                </Typography>
                <ul className={menu ? "open" : ""}>
                    <Link to='/'>
                        <li className='un'> Home</li>
                    </Link>
                    {user?.name === "Rao Abdul Hai" && isAuthenticated && (
                        <Link to='/admin'>
                            <li className='un'>Admin Panel</li>
                        </Link>
                    )}
                    <Link to='/courses'>
                        <li className='un'> Find Courses</li>
                    </Link>
                </ul>
                <Stack className='login-btns' id={menu ? "open" : ""} direction='row' spacing={3}>
                    <Login />
                    {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </Stack>
                <Button className='btn-mob' onClick={() => {
                    setMenu(!menu)
                }}><MenuIcon sx={{ color: 'black', fontSize: '30px' }} /></Button>
            </nav>
        </>
    );
}

export default Navbar;
