import {createTheme} from "@mui/material";

const lightThemeObj = {
  palette: {
    background: {
      default: "#eee"
    }
  }
};

const darkThemeObj = {
  palette: {
    background: {
      default: "#222"
    },
    mode: 'dark'
  }
};


export const getLightTheme = () => {
  return createTheme(lightThemeObj);
}

export const getDarkTheme = () => {
  return createTheme(darkThemeObj);
}