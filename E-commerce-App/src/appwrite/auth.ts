import conf from "../conf/conf.ts"
import { Client, Account, ID } from "appwrite";

// import axios from "axios";

export interface CreateUserAccount {
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
      const userAccount = await this.account.create(ID.unique(), email, password, name);

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

    // const apiUrl = 'http://localhost:8000/api/v1/users';

    // try {
    //   const response = await axios.post(`${apiUrl}/login`, {
    //     email,
    //     password,
    //   });
  
    //   if (response.data) {
    //     const { accessToken, refreshToken, user } = response.data.data;
    //     console.log('Logged in successfully:', accessToken, refreshToken, user);
    //   } else {
    //     console.error('Login failed:', response.data.error);
    //   }
    // } catch (error) {
    //   console.error('Error during login:');
    // }
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