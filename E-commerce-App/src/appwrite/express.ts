import { api, mailAPI, messageAPI, productAPI } from "../conf/conf.ts"

export interface CreateUserAccount {
  firstName : string;
  middleName : string;
  lastName : string;
  avatar ?: File;
  email : string;
  mobNum ?: string;
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

  async createAccount({avatar, firstName, middleName, lastName, email, mobNum, password} : CreateUserAccount) {
    try {
      console.log(avatar);
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("middleName", middleName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("avatar", avatar || "");
      formData.append("mobNum", mobNum ? "+91" + mobNum : "");
      formData.append("password", password);
      const response = await api.post("/register", formData);

      if(response.data) {
        const { accessToken, refreshToken, user } = response.data.data;
        console.log("Registered successfully..!")

        return user;
      } else {
        console.error("error while registeration : ");
      }
    } catch(error : any) {
      throw new Error(error.response.status)
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
    } catch (error : any) {
      throw new Error(error.response.status)
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

  //Fetching products from express

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

  //Fetching verification api from express

  async mailverification(email : string) {
    try {
      const response = await mailAPI.post("/send/otp", {
        mailAdd : email
      });
  
      if(!response) throw new Error("Error while sending Email");
      
      return response.data.data;
    } catch (error : any) {
      throw new Error(error.response.status);
    }
  }
  async mobNumVerification(mobNum : string) {
    try {
      const response = await messageAPI.post("/send/otp", {
        mobileNum : mobNum
      });
      
      if(!response) throw new Error("Error while sending message");

      return response.data.data
    } catch (error : any) {
      console.log(error.response.status);
      throw new Error(error.response.status);
    }

  }
}

const expressService = new ExpressService();

export default expressService;