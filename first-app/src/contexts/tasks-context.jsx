import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import { createTaskService } from "../services/create-task-service";
import { getTasksService } from "../services/get-tasks-service";
import { removeTaskService } from "../services/remove-task-service";
import { updateTaskService } from "../services/update-task-service";

export const TasksContext = createContext(null);

export const TasksContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const getTasks = useCallback(async () => {
        try {
            setLoading(true);
            setErrorMessage(null);
            const result = await getTasksService();
            setTasks(result);
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    const createTask = useCallback(async ({ title }) => {
        try {
            setLoading(true);
            setErrorMessage(null);
            await createTaskService({ title });
            await getTasks();
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    const removeTask = useCallback(async ({ taskId }) => {
        try {
            setLoading(true);
            setErrorMessage(null);
            await removeTaskService({ taskId });
            await getTasks();
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    const updateTask = useCallback(async ({ taskId, finished }) => {
        try {
            setLoading(true);
            setErrorMessage(null);
            await updateTaskService({ taskId, finished });
            await getTasks();
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getTasks();
    }, [getTasks]);

    const value = useMemo(
        () => ({
            loading,
            errorMessage,
            tasks,
            getTasks,
            createTask,
            removeTask,
            updateTask,
        }),
        [
            loading,
            errorMessage,
            tasks,
            getTasks,
            createTask,
            removeTask,
            updateTask,
        ],
    );

    return (
        <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
    );
};

export const useTasksContext = () => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error(
            "useTasksContext must be used within TasksContextProvider",
        );
    }
    return context;
};
