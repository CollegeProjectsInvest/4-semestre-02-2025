export async function loginUserService({ email, password }) {
    const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error);
    }

    return data;
}
