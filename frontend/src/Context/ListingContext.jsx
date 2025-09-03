import React,{createContext, useContext, useState} from 'react'
import { AuthDataContext } from './AuthContext'
export const listingDataContext = createContext()

function ListingContext({children}) {
    let [title,setTitle] = useState("")
    let [description,setDescription] = useState("")
    let [frontEndImage1,setFrontEndImage1] = useState(null)
    let [frontEndImage2,setFrontEndImage2] = useState(null)
    let [frontEndImage3,setFrontEndImage3] = useState(null)
    let [backEndImage1,setBackEndImage1] = useState(null)
    let [backEndImage2,setBackEndImage2] = useState(null)
    let [backEndImage3,setBackEndImage3] = useState(null)
    let [rent,setRent] = useState("")
    let [city,setCity] = useState("")
    let [landmark,setLandmark] = useState("")
    let [category,setCategory] = useState("")
    let {serverUrl} = useContext(AuthDataContext)

    const handlerunaddListing = async () => {
        try{
             let formData = new FormData()
    formData.append("title",title)
    formData.append("image1",backEndImage1)
    formData.append("image2",backEndImage2)
    formData.append("image3",backEndImage3)
    formData.append("description",description)
    formData.append("rent",rent)
    formData.append("city",city)
    formData.append("landmark",landmark)
    formData.append("category",category)

    let result = await axios.post(serverUrl + "/api/listing/add", formData,{withCredentials:true})
    console.log(result)
        }catch(error){
            console.log(error)
        }
    }
    let value={
        
    }
  return (
    <div>
        <listingDataContext.Provider value={value} >
        {children}
        </listingDataContext.Provider>
    </div>
  )
}

export default ListingContext