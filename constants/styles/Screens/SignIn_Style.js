import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 20,
    },
    headerImage: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#0096FF"
    },
    signContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    imageContainer: {
        width: "100",
        marginBottom: 20,
    },
    image: {
        resizeMode: 'cover',
    },
    textContainer: {
        marginBottom: 80,
    },
    textHead: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 16,
    },
    text: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 12,
    },
    button: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#6200ee',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        // width: "80%",
    },
    buttonImage: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
});