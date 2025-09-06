export async function registerUserService({ email, password, confirmationPassword }) {
    const response = await fetch('http://localhost:8080/api/user/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, confirmationPassword })
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error)
    }

    return data;
}