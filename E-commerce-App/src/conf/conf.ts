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
  baseURL : "http://localhost:8000",
  withCredentials : true
})

export {api}