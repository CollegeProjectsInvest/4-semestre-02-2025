import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Input, Button, Divider, Typography, Container } from "../components";
import { spacing } from "../styles/theme";
import { loginUserService } from "../services/login-user-service";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigation = useNavigation();

    const handleLoginUser = async () => {
        try {
            setLoading(true);
            const result = await loginUserService({
                email,
                password,
            });
            if (result.user) {
                navigation.navigate("tasks");
            }
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
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
                    onPress={() => handleLoginUser()}
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
