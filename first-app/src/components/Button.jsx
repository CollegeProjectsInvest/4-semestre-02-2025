import { TouchableOpacity, StyleSheet } from "react-native";

import { Typography } from "./Typography";

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
        backgroundColor: '#BB86FC',
        width: '100%',
        padding: 20,
        borderRadius: 10,
    },
})