import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import { colors, spacing } from "./styles/theme";
import { RouteNavigation } from "./routes";
import { AuthContextProvider } from "./contexts/auth-context";
import { TasksContextProvider } from "./contexts/tasks-context";

export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar style="light" />
            <AuthContextProvider>
                <TasksContextProvider>
                    <RouteNavigation />
                </TasksContextProvider>
            </AuthContextProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.sm,
    },
});
