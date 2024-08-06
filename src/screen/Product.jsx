import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { productsData } from "../Data/Data"
// import { useParams, useSearchParams } from 'react-router-dom'

const Product = () => {
    const {id} = useParams()
    console.log(id)
    const dataFilter = productsData.filter((e)=>{
        return id == e.id
    })
    console.log(dataFilter)
    // const location = useLocation()
    // console.log(location.state)
    // const [getValue,setGetValue] = useSearchParams()
    // const data = getValue.get("id")
    // console.log(data)
  return (
    <div>
        <h1>Product</h1>
        {
            dataFilter.map((e,i)=>{
                return(
                    <div key={i}>

                    <img src={e.image} alt="" />
                    <h1>{e.title}</h1>
                    <p>{e.description}</p>
                    <h3>{e.price}</h3>

                    </div>
                )

            })
        }
    {/* {data} */}
    </div>
  )
}

export default Product