import { StyleSheet, View, FlatList } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import Checkbox from 'expo-checkbox';

import { Button, Input, Typography, Container } from '../components'
import { colors, scale, spacing } from "../styles/theme"

export function TasksPage() {
    const tasks = [
        {
            id: 1,
            title: "Estudar React Estudar ReactEstudar ReactEstudar ReactEstudar ReactEstudar ReactEstudar ReactEstudar ReactEstudar ReactEstudar ReactEstudar ReactEstudar ReactEstudar ReactEstudar ReactEstudar ReactEstudar React",
            finished: true
        },
        {
            id: 2,
            title: "Estudar React",
            finished: false
        },
        {
            id: 3,
            title: "Estudar React",
            finished: true
        },
        {
            id: 4,
            title: "Estudar React",
            finished: true
        },
        {
            id: 5,
            title: "Estudar React",
            finished: true
        },
        {
            id: 6,
            title: "Estudar React 6",
            finished: true
        },
        {
            id: 7,
            title: "Estudar 7",
            finished: false
        }
    ];

    return (
        <Container>
            <Typography variant={"title"}>
                Crie e organize as suas tarefas.
            </Typography>
            <FlatList
                data={tasks}
                style={{
                    flex: 1,
                    width: '100%',
                    marginVertical: spacing.md,
                }}
                contentContainerStyle={{
                    gap: spacing.sm
                }}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.task}>
                        <View style={styles.title}>
                            <Checkbox color={colors.primary} value={item.finished} />
                            <Typography
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                variant={'text'}
                            >
                                {item.title}
                            </Typography>
                        </View>
                        <Feather name="trash-2" size={24} color="red" />
                    </View>
                )}
            />
            <View style={styles.form}>
                <Input placeholder={"Insira o nome da tarefa"} />
                <Button title={"Adicionar"} />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    form: {
        borderTopWidth: scale(1),
        borderColor: colors.gray,
        width: '100%',
        gap: scale(10),
        paddingVertical: spacing.sm,
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.secondary,
        padding: spacing.md,
        width: '100%',
        borderRadius: scale(8),
        gap: scale(20)
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: scale(10),
        width: '90%',
    }
})