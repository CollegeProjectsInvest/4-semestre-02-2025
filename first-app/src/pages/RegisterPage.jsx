import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';

import { Input, Button, Divider, Typography } from '../components';
import { spacing, colors } from '../styles/theme';

export function RegisterPage() {
    return (
        <View style={styles.content}>
            <Typography variant={"title"}>Crie sua conta.</Typography>
            <View style={styles.form}>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" secureTextEntry />
                <Input placeholder="Confirme sua senha" secureTextEntry />
                <Button title="Cadastrar" />
            </View>
            <Divider />
            <Button asLink title="Já tenho uma conta" />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: spacing.lg,
        alignItems: 'center',
        gap: spacing.lg
    },
    form: {
        width: '100%',
        gap: spacing.sm
    },
});
