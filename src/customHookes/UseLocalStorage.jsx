

import React, { useState } from 'react'

function UseLocalStorage(key, initialValue) {
    const setData = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            throw new Error(`Error Reading LocalStorage key "${key}":`, error)
        }
    }
    
    const removeData = () => {
        localStorage.removeItem(key)
        console.log(`Data removed!`)
    }

    const [value, setValue ] = useState(()=>{
        try {
            const item = window.localStorage.getItem(key);
            if(item === null) return initialValue;
            return JSON.parse(item)
        } catch (error) {
            console.error(`Error Reading LocalStorage key "${key}":`, error);
            return initialValue;
        }
    })
        // const data = JSON.parse(localStorage.getItem(key))
        // if(!data) throw new Error(`Error Reading LocalStorage key "${key}":`,data)
        // console.log("Get Data: ", data) 
        // return data

}

export default UseLocalStorage
