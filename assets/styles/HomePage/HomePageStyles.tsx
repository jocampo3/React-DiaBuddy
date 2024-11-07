import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: "center",
        marginLeft: "auto",
    },
    buttonStyle1: {
        alignItems: 'flex-end',
        width: "auto",
        height: "10%",
        backgroundColor: '#DC7633',
        marginBottom: 50,
        marginRight: 35,
        padding: 20,
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100
    },
    buttonStyle2: {
        alignItems: 'flex-end',
        width: 'auto',
        height: 'auto',
        backgroundColor: '#DC7633',
        marginBottom: 50,
        marginRight: 35,
        padding: 20,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100
    },
    setting: {
        position: 'absolute', // Position it absolutely
        top: 20,             // Adjust to your preference
        zIndex: 1,            // Adjust to your preference
        right: 400,           // Ensure it appears above other elements
    },
    text: {
        margin: "auto",
        fontSize: 20,
        color: "white",
        fontFamily: 'Bangers-Regular'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default styles;
