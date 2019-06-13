const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    border: "1px solid #B2DFDB",
    borderRadius: "4px",
    padding: "20px"
  },
  input: {
    width: "100%",
    margin: "20px 0",
    "&:invalid": {
      color: "#F8BBD0",
      fontWeight: "600"
    }
  },
  invalid: {
    backgroundColor: "#F8BBD0",
    margin: "0 0 10px",
    borderRadius: "3px",
    padding: "3px",
    fontWeight: "600"
  },
  button: {
    display: "block",
    margin: "0 auto 20px",
    backgroundColor: "#B2DFDB",
    padding: "10px 20px"
  }
};

export default styles;