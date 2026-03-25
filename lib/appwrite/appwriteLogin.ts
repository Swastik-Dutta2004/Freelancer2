import { account } from "./appwrite";

export async function login(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return { success: true, session };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

export async function logout() {
  try {
    await account.deleteSession("current");
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

export async function getCurrentUser() {
  try {
    const user = await account.get();
    return { success: true, user };
  } catch {
    return { success: false, user: null };
  }
}