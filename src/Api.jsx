import axios from "axios"

export const SignInAPI = async(data)=>{
    try{
        const response = await axios.post("http://localhost:3001/signin",data)
        if(response.status==200){
            Promise.resolve(response)
            return response
        }
    }
    catch(error){
        return Promise.reject(error)
    }
}