import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import { FormHelperText } from "@material-ui/core";

const theme = createMuiTheme({
  pallete: {
    primary: blue[700],
    secondary: blue[400]
  },
  overrides: {
    MuiIconButton: {
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        padding: "25px",
        margin: "0 10px"
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
        width:'290px',
        margin:'auto'
      }
    },
    MuiGrid: {
      root: {
        display: "flex",
        justifyContent: "center",
        flexWrap:'wrap'

      }
    },
  /*   MuiContainer:{
        root:{
            display: "flex",
            padding:'0'
        }
    } */
  }
});
const parentStyles = {
  root: {
    backgroundColor: "#000"
  }
};
export  { theme, parentStyles };
