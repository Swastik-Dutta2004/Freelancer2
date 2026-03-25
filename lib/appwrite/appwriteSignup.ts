import { ID } from "appwrite";
import { account } from "./appwrite";

export async function signUp(
  name: string,
  email: string,
  password: string
) {
  try {
    const user = await account.create(ID.unique(), email, password, name);
    // Automatically log them in after signup
    await account.createEmailPasswordSession(email, password);
    return { success: true, user };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}