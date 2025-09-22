import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Input, Button, Divider, Typography, Container } from "../components";
import { spacing } from "../styles/theme";
import { useAuthContext } from "../contexts/auth-context";

export function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");

    const { loading, errorMessage, register } = useAuthContext();

    const navigation = useNavigation();

    const handleRegisterUser = async () => {
        await register({ email, password, confirmationPassword });
        if (!errorMessage) {
            navigation.reset({
                index: 0,
                routes: [{ name: "tasks" }],
            });
        }
    };

    return (
        <Container>
            <Typography variant={"title"}>Crie sua conta.</Typography>
            <View style={styles.form}>
                <Input
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Input
                    placeholder="Confirme sua senha"
                    secureTextEntry
                    value={confirmationPassword}
                    onChangeText={setConfirmationPassword}
                />
                <Button
                    title="Cadastrar"
                    onPress={handleRegisterUser}
                    loading={loading}
                />
                {errorMessage && (
                    <Typography variant={"textError"}>
                        {errorMessage}
                    </Typography>
                )}
            </View>
            <Divider />
            <Button
                asLink
                title="Já tenho uma conta"
                onPress={() => {
                    navigation.navigate("login");
                }}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    form: {
        width: "100%",
        gap: spacing.sm,
    },
});
