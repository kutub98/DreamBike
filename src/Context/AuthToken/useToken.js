import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken]= useState('')
    
    useEffect(()=>{
      console.log(email, 'token')
        if(email){
            fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data =>{
              if(data.bikerToken){
                localStorage.setItem("bikerToken", data.bikerToken)
                setToken(data.bikerToken)
              }
            })
        }
    }, [email])
    return [token]
}
export default useToken;