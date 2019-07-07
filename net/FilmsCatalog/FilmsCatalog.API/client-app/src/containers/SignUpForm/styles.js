const styles = {
    container: {
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        width: "500px",
        margin: "100px auto"
    },
    form: {
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        margin: "50px 0",
        backgroundColor: "#000",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#C2185B"
        },
    },
    link: {
        margin: "10px auto",
        textAlign: "center",
        color: " #C2185B",
    },
    error:{
        color:"#EF5350",
        marginTop: "20px"
    }
}
export default styles;