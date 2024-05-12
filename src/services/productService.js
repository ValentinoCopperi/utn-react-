import axios from "axios";
import { useState } from "react";

export default async function getProducts(){
    return axios.get('https://fakestoreapi.com/products')
    .then(res => res)
    .then(data => {
        if(data.status = 200) return {error:false,data:data.data};

        return {error:true,data:[]};
    })
    .catch(err=> console.error(err))
}