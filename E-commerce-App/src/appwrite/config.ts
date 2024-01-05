import conf from "../conf/conf.ts"
import { Client, ID, Databases, Storage, Query } from "appwrite";

interface ProductDetails {
  name : string;
  price : number;
  rating : number;
  stock : number;
  storeVerified : boolean;
}

export class Services {
  client = new Client();
  databases : Databases;
  bucket : Storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

      this.databases = new Databases(this.client);
      this.bucket = new Storage(this.client);
  }

  async createProduct({name, price, rating, stock, storeVerified} : ProductDetails) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          name,
          price,
          rating,
          stock,
          storeVerified
        }
      )

    } catch (error) {
      throw error;
    }
  }

  async updateProduct(id: string, {name, price, rating, stock, storeVerified} : ProductDetails) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id,
        {
          name,
          price, 
          rating, 
          stock, 
          storeVerified
        }
      )
    } catch (error) {
        throw error;
    }
  }

  async deleteProduct(id : string) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id,
      )
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getProduct(id : string) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id
      )
    } catch(error) {
        throw error;
    }
  }

  async getProducts(queries = [Query.greaterThan("stock", 0)]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
        // [
            // queries can be written here also..
        // ]
      )
    } catch (error) {
      throw error;
    }
  }

  // file upload services..

  async uploadFile(file : File) {
    try{
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch(error) {
      throw error;
    }
  }

  async deleteFile(fileId : string) {
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      )
      return true;
    } catch (error) {
      throw error;
    }
  }

  getFilePreview(fileId : string) {
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }
}

const services = new Services();

export default services