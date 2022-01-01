import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    inputContainer: {
        flexDirection: "row",
        marginBottom: 20,

    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        alignSelf: "center",

    },
    input: {

        marginLeft: 10,
        width: "85%",
        marginVertical: 5,
        backgroundColor: "white",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#a570fb",
        alignSelf: "center",
    },
})