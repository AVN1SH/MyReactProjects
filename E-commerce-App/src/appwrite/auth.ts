import conf from "../conf/conf.ts"
import { Client, Account, ID } from "appwrite";

interface CreateUserAccount {
  name : string;
  email : string;
  password : string;
}

interface LoginUserAccount {
  email : string;
  password : string;
}

export class AuthService {
  client = new Client();
  account : Account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({name, email, password} : CreateUserAccount) {
    try {
      const userAccount = await this.account.create(ID.unique(), name, email, password);

      if (userAccount) {
        return this.login({email, password});
      } else {
        return userAccount;
      }

    } catch (error) {
        throw error;
    }
  }

  async login({email, password} : LoginUserAccount) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch(error) {
        throw error;
    }
  }

  async getCurrentUser() {
    try {
        return await this.account.get();
    } catch(error) {
        throw error;
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      
    }
  }
}

const authService = new AuthService();

export default authService;