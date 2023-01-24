'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import React from 'react';
import Logo from './Logo';
import { CssBaseline, Container, Box } from '@mui/material';
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
    <div>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar className="bg-zinc-700">
            <Toolbar>
              <Logo />
              <Typography
                variant="h6"
                component="div"
                className="text-blue-200"
              >
                CodingTalk
              </Typography>
              {props.children}
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Container className="text-blue-200">
          <Box sx={{ my: 9 }}>
            {[...new Array(12)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
