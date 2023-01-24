'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import React from 'react';
import Logo from './Logo';
interface Props {
  window?: () => Window;
  children: React.ReactElement;
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
      {children}
    </Slide>
  );
}
export default function Header(props: Props) {
  return (
    <HideOnScroll {...props}>
      <AppBar className="bg-transparent">
        <Toolbar>
          <Logo />
          <Typography variant="h6" component="div">
            CodingTalk
          </Typography>
          {props.children}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
