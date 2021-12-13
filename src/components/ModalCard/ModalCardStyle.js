import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,

        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: deviceSize.height / 4,

    },
    modal: {
        justifyContent: "flex-end",
        margin: 0,

    },
    inputContainer: {
        flexDirection: "row"
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,

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
        alignSelf: "center"
    },
    textInput: {
        flex: 1
    }
})