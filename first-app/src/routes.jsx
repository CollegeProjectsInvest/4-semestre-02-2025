import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { TasksPage } from "./pages/TasksPage";

const Stack = createNativeStackNavigator();

export function RouteNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="login"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="login" component={LoginPage} />
                <Stack.Screen name="register" component={RegisterPage} />
                <Stack.Screen name="tasks" component={TasksPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
