import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Input, Button, Divider, Typography } from '../components';

export function RegisterPage() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Typography variant={"title"}>Crie sua conta.</Typography>
            <View style={styles.form}>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" secureTextEntry />
                <Input placeholder="Confirmar senha" secureTextEntry />
                <Button title="Cadastrar" />
            </View>
            <Divider />
            <Button asLink title="Já tenho uma conta" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: "center",
        paddingVertical: 100,
        paddingHorizontal: 10,
        gap: 100
    },
    form: {
        width: '100%',
        gap: 20
    },
});
