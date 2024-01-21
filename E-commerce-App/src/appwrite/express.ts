import { api } from "../conf/conf.ts"

export interface CreateUserAccount {
  name : string;
  email : string;
  password : string;
}

interface LoginUserAccount {
  email : string;
  password : string;
}

export class ExpressService {

  async createAccount({name, email, password} : CreateUserAccount) {
    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
        avatar : "",
        coverImage : ""
      });

      if(response.data) {
        const { accessToken, refreshToken, user } = response.data.data;
        console.log("Registered successfully..!")

        return user;
      } else {
        console.error("error while registeration : ");
      }
    } catch(error) {
      console.log("error while creating accout : ", error);
    }
  }

  async login({email, password} : LoginUserAccount) {
    try {
      const response = await api.post(`/login`, {
        email,
        password,
      });
  
      if (response.data) {
        const { accessToken, refreshToken, user } = response.data.data;
        console.log('Logged in successfully');

        return user;

      } else {
        console.error('Login failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error during login:');
    }
  }

  async getCurrentUser() {
    try {
      const response = await api.post("/current-user");

      if(response.data){ 
        return response.data
      } else { return null}

    } catch (error) {
      console.log("current-user not fetched, error : ", error);
    }
  }

  async logout() {
    try {
      // await api.post("/logout", null, {
      //   headers : {
      //     Authorization : `Bearer ${accessToken}`
      //   }
      // });
      await api.post("/logout");
    } catch (error) {
      console.log("logout not fetched, error : ", error);
    }
  }
}

const expressService = new ExpressService();

export default expressService;