import { TextInput, StyleSheet } from "react-native";

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
        padding: 20,
        backgroundColor: '#222222',
        width: '100%',
        borderRadius: 10,
        fontSize: 26,
        color: 'white',
    },
})