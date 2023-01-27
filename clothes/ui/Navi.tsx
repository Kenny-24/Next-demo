'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import React from 'react';
import { CssBaseline, Box, Link } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { naviList } from '@/lib/swipePicture';

import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import SearchBtn from './Search';
interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {/* @ts-ignore */}
      {children}
    </Slide>
  );
}

const settings = ['个人简介', '账户', '主页', '退出'];
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: 'white',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#ea80fc',
  },
}));
export default function Navi(props: Props) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div>
      <>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar color="transparent">
            <Toolbar className="bg-zinc-800 ">
              <Typography
                variant="h4"
                noWrap
                component="div"
                className="select-none"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'red',
                  textDecoration: '',
                }}
              >
                CodingTalk
              </Typography>

              <Box
                sx={{
                  color: 'pink',
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                {naviList.map((item: any) => (
                  <Link
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                    key={item.name}
                    href={item.link}
                  >
                    <Button color="inherit">{item.name}</Button>
                  </Link>
                ))}
                {/* {props.children} */}
              </Box>
              <Box sx={{ mr: 3, flexGrow: 0 }}>
                <SearchBtn />
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="设置">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="fish" src="/yu.png" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">设置</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar className="mb-10" />
      </>
    </div>
  );
}
