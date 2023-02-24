import axios from "axios";

const BaseUrl="https://"
const token=""

export const publicRequest=axios.create({
    baseURL:BaseUrl
})

export const userRequest=axios.create({
    baseURL:BaseUrl,
    headers:{token : `Bearer ${token}`} 
})