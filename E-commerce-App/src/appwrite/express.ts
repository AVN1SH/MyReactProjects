import { api, productAPI } from "../conf/conf.ts"

export interface CreateUserAccount {
  firstName : string;
  middleName : string;
  lastName : string;
  email : string;
  password : string;
}

interface LoginUserAccount {
  email : string;
  password : string;
}

// Product interface 

export interface ProductInfoType {
  _id : string,
  name : string,
  specification : {
    keys : [string],
    values : [string]
  }
  description : [{
    image : string;
    title : string;
    content : string;
  }];
  image : string;
  imageCollection : [string]
  price : number;
  stock : number;
  rating : number;
  verified : boolean;
}

export class ExpressService {

  async createAccount({firstName, middleName, lastName, email, password} : CreateUserAccount) {
    try {
      const response = await api.post("/register", {
        firstName,
        middleName,
        lastName,
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

  async allProducts() {
    const response = await productAPI.post("/");
      if(response) {
        return response.data.data;
      } else {
        console.error("failed to fetch product data");
      }
  }

  async filteredProduct(id : string) {
    const response = await productAPI.post(`/${id}`);
    if(response) {
      return response.data.data;
    } else {
      console.error("failed to get filtered data");
    }
  }
}

const expressService = new ExpressService();

export default expressService;