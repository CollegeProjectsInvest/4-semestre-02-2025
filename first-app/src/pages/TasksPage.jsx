import { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

import { Button, Input, Typography, Container } from "../components";
import { colors, scale, spacing } from "../styles/theme";
import { createTaskService } from "../services/create-task-service";
import { getTasksService } from "../services/get-tasks-service";
import { removeTaskService } from "../services/remove-task-service";
import { updateTaskService } from "../services/update-task-service";
import { logoutUserService } from "../services/logout-user-service";

export function TasksPage() {
    const [title, setTitle] = useState("");
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigation = useNavigation();

    useEffect(() => {
        handleGetTasks();
    }, []);

    const handleGetTasks = async () => {
        try {
            setLoading(true);
            const result = await getTasksService();
            setTasks(result);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateTask = async () => {
        try {
            setLoading(true);
            await createTaskService({ title });
            await handleGetTasks();
            setTitle("");
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveTask = async ({ taskId }) => {
        try {
            setLoading(true);
            await removeTaskService({ taskId });
            await handleGetTasks();
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateTask = async ({ taskId, finished }) => {
        try {
            setLoading(true);
            await updateTaskService({ taskId, finished });
            await handleGetTasks();
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogoutUser = async () => {
        try {
            setLoading(true);
            await logoutUserService();
            navigation.navigate("login");
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Typography variant={"title"}>
                Crie e organize as suas tarefas.
            </Typography>
            <Button
                title="Sair"
                asLink
                onPress={() => {
                    handleLogoutUser();
                }}
            />
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
                                    handleUpdateTask({
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
                            onPress={() =>
                                handleRemoveTask({ taskId: item.id })
                            }
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
                    onPress={() => handleCreateTask()}
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
