import App from "../App";
import {ThemeProvider} from "@mui/material";
import {getDarkTheme, getLightTheme} from "../theme";

export const AppWrapper = ({theme = 'light'}) => {
  const themeValue = theme === 'light' ? getLightTheme() : getDarkTheme();

  return (
    <ThemeProvider theme={themeValue}>
      <App />
    </ThemeProvider>
  );
}

export default {
  title: 'Containers/App',
  component: AppWrapper
}

export const LightThemed = {
  args: {
    theme: 'light'
  }
}

export const DarkThemed = {
  args: {
    theme: 'dark'
  }
}
