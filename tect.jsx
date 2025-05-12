import React, { useState } from 'react'

function UseLocalStorage(key, initialValue) {

    const [ storedValue, setStoredValue ] = 
    useState(() =>{
        try {
            const item = window.localStorage.getItem(key);
            if(item === null) return initialValue;
            return JSON.parse(item)
        } catch (error) {
            console.error(`Error Reading LocalStorage key "${key}":`, error);
            return initialValue;
        }
    })

    const setValue = (value) => {
        try {
            // const valueToStore = instanceof 
            // Function 
            //     ? value(storedValue) 
            //     : value;
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting localstorage key ${key}:`, error)
        }
    };

    const removeValue = () => {
        try {
            window.localStorage.removeItem(key);
            setStoredValue(undefined);
        } catch (error) {
            console.error(`Error setting localstorage key ${key}:`, error)
        }
    };
    return [ storedValue, setValue, removeValue ];
}

export default UseLocalStorage


// import React from 'react'

// function UseLocalStorage(key) {
// try {
//     if(key){
//         function setData(value){
//             if(value){
//                 localStorage.setItem(key, JSON.stringify(value))
//                 // const data = JSON.parse(localStorage.getItem(key))
//                 // console.log("Data Updated:", data)
//             }
//             else{
//                 throw new Error("Value data is " + value)
//             }
//         }
//         function getData(){
//             const data = JSON.parse(localStorage.getItem(key))
//             if(!data) throw new Error("No data available. Data " + data)
//             console.log("Get Data: ", data) 
//             return data
//         }
//         function removeData(){
//             localStorage.removeItem(key)
//         }
//         return {setData, getData, removeData}
//     }
//     else{
//         throw new Error("Please provide a key(Identifier) in other to use local storage")
//     }
// } catch (error) {
//     console.log(error.message)
// }
// }

// export default UseLocalStorage
