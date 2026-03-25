import { account } from "./appwrite/appwrite";

export async function getLoggedInUser() {
  try {
    return await account.get();
  } catch {
    return null;
  }
}