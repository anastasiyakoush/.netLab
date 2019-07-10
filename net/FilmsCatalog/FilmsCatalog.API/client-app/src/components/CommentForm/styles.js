const styles = {
    container: {
        width: "60%",    
        display: "flex",
        flexDirection: "column",
        marginBottom: "50px",
        borderBottom: "1px solid #E0E0E0",
    },
    input: {
        backgroundColor: "#212121",
        border: "1px solid #E91E63",
        borderRadius: "4px",
        padding: "15px",
        color: "#fff",
    },
    button: {
        width: "10%",
        border: "1px solid #9E9E9E",
        color: "#fff",
        marginTop: "20px",
        marginBottom: "20px",
        marginLeft:"auto",
        "&:hover": {
            color: "#E91E63",
            backgroundColor: "#F48FB1"
        }
    }
}
export default styles;