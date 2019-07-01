const styles = {
    input: {
        width: "100%",
        "&:invalid": {
            color: "#F8BBD0",
            fontWeight: "600"
        }
    },
    invalid: {
        backgroundColor: "#F8BBD0",
        borderRadius: "3px",
        padding: "3px",
        fontWeight: "600"
    },
    label: {
        display: "block",
        margin: "10px 0",
        width: "100%",
        borderRadius: "5px"
    }
}
export default styles;