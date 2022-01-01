import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderColor: "gray",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        marginBottom: 10,
        backgroundColor: "white"
    },
    title: {
        color: "#a570fb",
        fontSize: 32,
        alignSelf: "center",
        fontWeight: "bold",
    },

    button: {
        alignItems: "flex-end",
        flex: 1
    }
})