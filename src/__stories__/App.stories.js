import App from "../App";
import {createTheme, ThemeProvider} from "@mui/material";

export const AppWrapper = () => {
  return <App />;
}

export default {
  title: 'Containers/App',
  component: AppWrapper
}

export const ThemedWrapper = () => {
  return (
    <ThemeProvider theme={createTheme('light')}>
      <App />
    </ThemeProvider>
  )
}
