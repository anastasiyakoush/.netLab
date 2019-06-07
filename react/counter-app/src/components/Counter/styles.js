import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        background: "#00BFA5",
        padding: "20px",
        margin: "0 10px",
        "&:hover": {
          backgroundColor: "#1DE9B6"
        }
      }
    },
    MuiTypography: {
      root: {
        display: "block"
      },
      body1: {
        fontSize: "80px",
        textAlign: "center"
      }
    },
    MuiBox: {
      root: {
        width: "270px"
      },
      parent: {
        margin: "auto",
        border: "none"
      },
      wrapper: {
        border: "2px solid #00BFA5",
        padding: "8px",
        boxSizing: "border-box",
        margin: "17px"
      }
    },
    MuiDivider: {
      root: {
        height: "5px",
        backgroundColor: "#00BFA5"
      }
    },
    MuiGrid: {
      root: {
        display: "flex",
        flexWrap: "wrap"
      }
    }
  }
});

export default theme;
