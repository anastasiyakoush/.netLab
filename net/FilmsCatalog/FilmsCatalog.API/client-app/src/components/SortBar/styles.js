const styles = {
    container: {
        backgroundColor: "#fff",
        color: "#000",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "auto",
        borderRadius: "4px",
        padding: "10px",        
    },
    item: {
        borderRight: "1px solid #D81B60",
        display: "flex",
        minWidth: "80px",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#F8BBD0"
        }
    },
    button: {
        backgroundColor: "#000",
        color: "#fff",
        marginLeft: "auto",
        height: "32px",
        "&:hover": {
            backgroundColor: "#fff",
            color: "#000",
        }
    }
}
export default styles;