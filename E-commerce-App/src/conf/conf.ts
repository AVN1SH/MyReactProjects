const conf = {
  appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf;


// axios config

import axios from "axios"

const api = axios.create({
  baseURL : `${import.meta.env.VITE_MY_API_URI}/api/v1/users`,
  withCredentials : true
});
const productAPI = axios.create({
  baseURL : `${import.meta.env.VITE_MY_API_URI}/api/v1/product`,
  withCredentials : true
})
export {api, productAPI}