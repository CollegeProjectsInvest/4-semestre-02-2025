import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Input, Button, Divider, Typography } from '../components';

export function LoginPage() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Typography variant={"title"}>Bem Vindo!</Typography>
            <View style={styles.form}>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" secureTextEntry />
                <Button title="Entrar" />
            </View>
            <Divider />
            <Button asLink title="Criar uma conta" />
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
