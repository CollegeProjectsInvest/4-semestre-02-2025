export async function getTasksService() {
    const response = await fetch("http://localhost:8080/api/task/list-all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error);
    }

    return data;
}
