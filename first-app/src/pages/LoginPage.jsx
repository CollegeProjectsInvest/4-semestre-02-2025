import { StyleSheet, View } from 'react-native';

import { Input, Button, Divider, Typography } from '../components';
import { spacing } from '../styles/theme';

export function LoginPage() {
    return (
        <View style={styles.content}>
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
