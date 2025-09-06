import { StyleSheet, View } from "react-native";

import { colors, spacing } from "../styles/theme";

export function Container({ children }) {
    return <View style={styles.container}> {children}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.xs,
        backgroundColor: colors.background
    }
});
