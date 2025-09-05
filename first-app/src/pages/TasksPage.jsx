import { StyleSheet, View, FlatList } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import Checkbox from 'expo-checkbox';

import { Typography } from '../components/Typography';
import { colors, scale, spacing } from "../styles/theme"

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
    }
];

export function TasksPage() {
    return (
        <View style={styles.content}>
            <Typography variant={"title"}>
                Crie e organize as suas tarefas.
            </Typography>
            <FlatList
                data={tasks}
                style={{ width: '100%' }}
                contentContainerStyle={styles.listTasks}
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
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: spacing.lg,
        alignItems: 'center',
        gap: spacing.lg
    },
    listTasks: {
        flex: 1,
        width: '100%',
        gap: scale(10)
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.secondary,
        padding: spacing.sm,
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