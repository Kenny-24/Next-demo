/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function Links() {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
    >
      <Link className="LinkName" href="/">
        One
      </Link>
      <Link className="LinkName" href="/kun">
        Two
      </Link>
      <Link className="LinkName" href="/todos">
        Three
      </Link>
      <Link className="LinkName" href="/search">
        Four
      </Link>
    </Box>
  );
}
