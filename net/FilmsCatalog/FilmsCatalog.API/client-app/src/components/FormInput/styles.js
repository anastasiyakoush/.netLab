const styles = {
    input: {
        width: "400px",
        marginTop:"30px",
        "&:invalid": {
            color: "#F8BBD0",
            fontWeight: "600"
        }
    },
    invalid: {
        backgroundColor: "#F8BBD0",
        borderRadius: "3px",
        padding: "3px",
        fontWeight: "600",
        width: "400px",
    },
    label: {
        display: "block",
        margin: "10px 0",
        width: "100%",
        borderRadius: "5px"
    }
}
export default styles;