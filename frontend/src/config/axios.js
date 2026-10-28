// import axios from 'axios'

// export const axiosi=axios.create({withCredentials:true,baseURL:"https://e-commerce-beige-gamma-37.vercel.app"})


import axios from "axios";


export const axiosi = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_URL
});