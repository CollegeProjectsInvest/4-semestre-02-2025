import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Input, Button, Divider, Typography, Container } from "../components";
import { spacing } from "../styles/theme";
import { useAuthContext } from "../contexts/auth-context";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { errorMessage, loading, login } = useAuthContext();

    const navigation = useNavigation();

    const handleLoginUser = async () => {
        await login({ email, password });
        if (!errorMessage) {
            navigation.reset({
                index: 0,
                routes: [{ name: "tasks" }],
            });
        }
    };

    return (
        <Container>
            <Typography variant={"title"}>Bem Vindo!</Typography>
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
                <Button
                    loading={loading}
                    title="Entrar"
                    onPress={handleLoginUser}
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
                title="Criar uma conta"
                onPress={() => {
                    navigation.navigate("register");
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
