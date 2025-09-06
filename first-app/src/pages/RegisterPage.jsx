import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Input, Button, Divider, Typography, Container } from '../components';
import { spacing } from '../styles/theme';
import { registerUserService } from '../services/register-user-service';

export function RegisterPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmationPassword, setConfirmationPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const handleRegisterUser = async () => {
        try {
            setLoading(true)
            const result = await registerUserService({ email, password, confirmationPassword })
            console.log(result);
            // TODO: navegar para outra tela
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setLoading(false)
        }
    };

    return (
        <Container>
            <Typography variant={"title"}>Crie sua conta.</Typography>
            <View style={styles.form}>
                <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
                <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
                <Input placeholder="Confirme sua senha" secureTextEntry value={confirmationPassword} onChangeText={setConfirmationPassword} />
                {errorMessage && <Typography variant={"textError"}>{errorMessage}</Typography>}
                <Button title="Cadastrar" onPress={handleRegisterUser} loading={loading} />
            </View>
            <Divider />
            <Button asLink title="Já tenho uma conta" />
        </Container>
    );
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        gap: spacing.sm
    },
});
