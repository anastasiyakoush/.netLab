import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        padding: "25px",
        margin: "0 10px"
      }
    },
    MuiTypography: {
      body1: {
        fontSize: "80px",
        textAlign: "center"
      }
    },
    MuiContainer: {
      root: {
        justifyContent: "center",
        display: "flex"
      }
    }
  }
});

export default theme;
