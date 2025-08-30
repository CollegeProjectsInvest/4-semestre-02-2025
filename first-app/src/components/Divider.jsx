import { View, Text, StyleSheet } from "react-native"
import { colors, fontSize, scale, spacing } from "../styles/theme"

export function Divider() {
    return (
        <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.textDivider}>Ou</Text>
            <View style={styles.line} />
        </View>
    )
}

const styles = StyleSheet.create({
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.md,
        width: '100%',
    },
    line: {
        backgroundColor: colors.gray,
        height: scale(2),
        width: '30%'
    },
    textDivider: {
        color: colors.gray,
        fontSize: fontSize.medium
    },
})