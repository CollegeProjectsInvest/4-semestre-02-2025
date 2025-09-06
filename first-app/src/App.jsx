import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { TasksPage } from "./pages/TasksPage";
import { colors, spacing } from "./styles/theme";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <StatusBar style="light" />
      <TasksPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm
  },
})