import { Stack, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const btns: {
  route: string;
  label: string;
}[] = [
    { route: '/authors', label: 'To authors' },
    { route: '/books', label: 'To books' }
  ]

export const HomeRoute = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={8}
      width='100%'
      height='calc(100% - 69px)'
    >
      {btns.map(({ route, label }) => (
        <Button
          component={Link}
          to={route}
          variant="outlined"
          sx={{
            width: '150px',
            height: '150px',
            borderRadius:'12px'
          }}
        >{label}</Button>
      ))}
    </Stack>
  )
}
