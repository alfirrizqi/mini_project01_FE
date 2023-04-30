import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Category() {


    const [categories, setCategories] = useState([]);
    

    const getCategory = async () => {
        try {
            const res = await axios.get("http://localhost:8000/auth/category/get");
            setCategories(res.data.data)
        } catch (err) {
            console.log(err);
        } 
    }
    



    useEffect(() => {
        getCategory() 
    }, [])

    return (
        categories?.map((Category, index) => {
        return (
            <div className='Category' key={Category.Category_id}>
            <h1 className="Category_name">{Category.name}</h1>
            <p className="Category_price">{Category.price}</p>
            <p className="Category_description">{Category.description} </p>
        </div>
        )
        })
    )
}