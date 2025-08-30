import { TouchableOpacity, StyleSheet } from "react-native";

import { Typography } from "./Typography";
import { colors, scale, spacing } from '../styles/theme'

export function Button({ title, asLink }) {
    if (asLink) {
        return (
            <TouchableOpacity>
                <Typography variant="link">
                    {title}
                </Typography>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity style={styles.button}>
            <Typography variant="button">{title}</Typography>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        padding: spacing.lg,
        borderRadius: scale(10),
    },
})