import { AuthClient } from "@dfinity/auth-client";

export async function logout() {
    const client = await AuthClient.create();
    await client.logout();
    localStorage.removeItem("principal");
    localStorage.setItem("loggedOut", "true");
}
