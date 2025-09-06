import { StyleSheet, View } from 'react-native';

import { Input, Button, Divider, Typography, Container } from '../components';
import { spacing } from '../styles/theme';

export function LoginPage() {
    return (
        <Container>
            <Typography variant={"title"}>Bem Vindo!</Typography>
            <View style={styles.form}>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" secureTextEntry />
                <Button title="Entrar" />
            </View>
            <Divider />
            <Button asLink title="Criar uma conta" />
        </Container>
    );
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        gap: spacing.sm
    },
});
