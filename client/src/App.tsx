// import { Countpage } from "./features/countpage"
import { router } from "./screens";
import { useRoutes } from "react-router-dom";
import { Box, CssBaseline } from '@mui/material';
import { Header } from "./components/Header";


export const App = () => {
  let element = useRoutes(router);
  return (
    // <Countpage />
    <Box sx={{ width: '100%', height: '100vh' }}>
      <CssBaseline />
      <Header />
      {element}
    </Box>
  )
}
