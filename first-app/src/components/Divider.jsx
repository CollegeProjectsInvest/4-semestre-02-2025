import { View, Text, StyleSheet } from "react-native"

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
        gap: 10
    },
    line: {
        backgroundColor: '#ABABAB',
        height: 2,
        width: 100
    },
    textDivider: {
        color: '#ABABAB',
        fontSize: 18
    },
})