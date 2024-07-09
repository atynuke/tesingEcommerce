import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
// require cors = from "cors"
// import style from '../ProductPage/product.module.css'



export const UseProduct = (props) => {

    // const { image, category, title, price } = props
    
    const [ product, setProduct] = useState([]);
    const [ category, setCategory] = useState([]);
console.log("first")
    
    // const 
    const fetchProduct = async () => {
        try {
            const {
                data: {data},
            } = await axios.get("https://api.mockx.net/products");
                    setProduct(data);
                    console.log(data)
                } catch (error) {
                    console.log ({error});
                }
        }; 
        
        const fectchCategory = async ()=> {
        try {
            const {
                data: {data},
            } = await axios.get("https://fakestoreapi.com/categories");
                    setCategory(data);
                } catch (error) {
                    console.log ({error});
                }
        };
    
        useEffect(() => {
            fetchProduct();
            // fetchCategory();
          }, []);
        
        return (<>
        <div>

        </div>
        </>)
}