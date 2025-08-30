import { TextInput, StyleSheet } from "react-native";
import { colors, fontSize, scale, spacing } from "../styles/theme";

export function Input({ placeholder, secureTextEntry }) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={'#ABABAB'}
            secureTextEntry={secureTextEntry}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        padding: spacing.lg,
        backgroundColor: colors.secondary,
        width: '100%',
        borderRadius: scale(10),
        fontSize: fontSize.medium,
        color: colors.white,
    },
});
