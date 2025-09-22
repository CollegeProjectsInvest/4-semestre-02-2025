import { useCallback, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

import { Button, Input, Typography, Container } from "../components";
import { colors, scale, spacing } from "../styles/theme";
import { useTasksContext } from "../contexts/tasks-context";
import { useAuthContext } from "../contexts/auth-context";

export function TasksPage() {
    const [title, setTitle] = useState("");

    const { loading, errorMessage, tasks, createTask, removeTask, updateTask } =
        useTasksContext();
    const { logout } = useAuthContext();

    const navigation = useNavigation();

    const handleLogout = async () => {
        await logout();
        navigation.reset({
            index: 0,
            routes: [{ name: "login" }],
        });
    };

    return (
        <Container>
            <Typography variant={"title"}>
                Crie e organize as suas tarefas.
            </Typography>
            <Button title="Sair" asLink onPress={handleLogout} />
            <FlatList
                data={tasks}
                style={{
                    flex: 1,
                    width: "100%",
                    marginVertical: spacing.md,
                }}
                contentContainerStyle={{
                    gap: spacing.sm,
                }}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.task}>
                        <View style={styles.title}>
                            <Checkbox
                                color={colors.primary}
                                value={item.finished}
                                onChange={() =>
                                    updateTask({
                                        taskId: item.id,
                                        finished: !item.finished,
                                    })
                                }
                            />
                            <Typography
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                variant={"text"}
                            >
                                {item.title}
                            </Typography>
                        </View>
                        <Feather
                            name="trash-2"
                            size={24}
                            color="red"
                            onPress={() => removeTask({ taskId: item.id })}
                        />
                    </View>
                )}
            />
            <View style={styles.form}>
                <Input
                    placeholder={"Insira o nome da tarefa"}
                    value={title}
                    onChangeText={setTitle}
                />
                <Button
                    title={"Adicionar"}
                    loading={loading}
                    onPress={() => {
                        createTask({ title });
                        setTitle("");
                    }}
                />
                {errorMessage && (
                    <Typography variant={"textError"}>
                        {errorMessage}
                    </Typography>
                )}
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    form: {
        borderTopWidth: scale(1),
        borderColor: colors.gray,
        width: "100%",
        gap: scale(10),
        paddingVertical: spacing.sm,
    },
    task: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.secondary,
        padding: spacing.md,
        width: "100%",
        borderRadius: scale(8),
        gap: scale(20),
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: scale(10),
        width: "90%",
    },
});
