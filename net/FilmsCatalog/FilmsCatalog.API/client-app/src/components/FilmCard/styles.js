const styles = {
    container: {
        width: "22%",
        minHeight: "450px",
        color: "#F44336",
        backgroundColor: "#000",
        margin: "20px 0",
        position: "relative",
        boxShadow: "-2px -2px 20px 0px rgba(255,255,255,0.3)"
    },
    header: {
        textAlign: "center"
    },
    focus: {
        "z-index": 10,
        position: "absolute",
        backgroundColor: "rgba(69, 90, 100,0.8)",
        color: "#fff",
        width: " 100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        "z-index": 1,
        position: "absolute",
    }
}
export default styles;