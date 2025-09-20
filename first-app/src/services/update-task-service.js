export async function updateTaskService({ taskId, finished }) {
    const response = await fetch("http://localhost:8080/api/task/update", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: taskId, finished }),
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error);
    }

    return data;
}
