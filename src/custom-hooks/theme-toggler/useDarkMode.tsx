import { useState,useEffect } from "react"
function getValueFromLocalStorage(key:string,value:any){
const savedValue=localStorage.getItem(key)
if(savedValue) return savedValue
if(value  instanceof Function) return value()
    return value
}
export default function useDarkMode(key:string,initialValue:string) {
    console.log(initialValue)
    const [value,setValue]=useState(()=>{
        return getValueFromLocalStorage(key,initialValue)
    })
    useEffect(() => {
localStorage.setItem(key,value)

    },[value,key])
console.log(value)
  return (
    [value,setValue]
  )
}

