import { StyleSheet, Text } from "react-native";
import { colors, fontSize } from "../styles/theme";

export function Typography({ children, variant, ...rest }) {
    return (
        <Text
            {...rest}
            style={styles[`${variant}`]}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.white,
        fontSize: fontSize.medium,
        textAlign: 'center',
    },
    title: {
        color: colors.white,
        fontSize: fontSize.large,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        textAlign: 'center',
        color: colors.white,
        fontSize: fontSize.medium,
        fontWeight: 'bold'
    },
    link: {
        color: colors.gray,
        textDecorationLine: 'underline',
        fontSize: fontSize.small
    },
    textError: {
        color: colors.red,
        fontSize: fontSize.medium,
        textAlign: 'center',
    },
})