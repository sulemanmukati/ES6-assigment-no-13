// import { Card } from '@mui/material'
import React from 'react'
import Cards from '../Cards/Cards'
import {productsData} from "../Data/Data"
// import { useNavigate} from 'react-router-dom'

const Home = () => {
//   const navigate = useNavigate()
// let obj ={
//     name: "faraz",
//     city: "karachi"
// }
  return (
    <div>
        {/* <h1>Home page</h1> 
        <button onClick={()=>navigate('/products',{state: obj})}>
            go to products page
        </button> */}
{
    productsData.map((e,i)=>{
        return(
            <div style={{display:"inline-block"}}>

            <Cards
            key={i}
            title={e.title}
            image={e.image}
            desc={e.description}
            id={e.id}/>
            </div>
        )
    })
}

    </div>
  )
}

export default Home