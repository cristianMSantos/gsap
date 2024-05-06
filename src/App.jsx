import Router from "./routes";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const defaultTheme = createTheme();
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}


export default App;
