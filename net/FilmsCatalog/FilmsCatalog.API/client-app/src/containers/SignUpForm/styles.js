const styles = {
    container: {
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        width: "500px",
        padding: "10% 50%",
        backgroundColor: "#fff"
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
    error: {
        color: "#EF5350",
        marginTop: "20px"
    },
    title: {
        width: "100px"
    }
}
export default styles;