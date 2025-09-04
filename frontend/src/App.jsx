import React from "react"
import {Route, Routes} from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/home"
import Listingpage1 from "./pages/Listingpage1"
import ListingPage2 from "./pages/ListingPage2"
function App(){
    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/listingpage1' element={<Listingpage1/>}/>
            <Route path='/listingpage2' element={<ListingPage2/>}/>
        </Routes>
        </>
    )
}

export default App
