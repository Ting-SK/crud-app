import { AppBar, Box, Toolbar, Button, Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom'

const pages: {
    name: string;
    route: string;
}[] = [
        { name: 'Authors', route: '/authors' },
        { name: 'Books', route: '/books' },
    ];

export const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        width='100%'
                    >
                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '24px',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Home
                        </Button>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {pages.map(({ name, route }, index) => (
                                <Button
                                    component={Link}
                                    key={index}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    to={route}
                                >
                                    {name}
                                </Button>
                            ))}
                        </Box>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}