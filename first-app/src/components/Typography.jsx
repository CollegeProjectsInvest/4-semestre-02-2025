import { StyleSheet, Text } from "react-native";

export function Typography({ children, variant }) {
    return (
        <Text style={styles[`${variant}`]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 24,
        textAlign: 'center'
    },
    title: {
        color: "white",
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        textAlign: 'center',
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold'
    },
    link: {
        color: "#ABABAB",
        textDecorationLine: 'underline',
        fontSize: 18
    }
})