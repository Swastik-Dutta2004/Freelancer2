import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("69c3ebd0000df8d88ab0");

export const account = new Account(client);
export default client;