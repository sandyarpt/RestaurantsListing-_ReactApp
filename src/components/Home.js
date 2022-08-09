import React from 'react';
import {Row,Col } from 'react-bootstrap'

import{useState,useEffect} from 'react'
import RestaurantCard from  './RestaurantCard'

function Home() {
    const[restaurants,setRestaurants]=useState([])

  async function fetchData(){
    await fetch('./restaurants.json')
    .then((data)=>data.json())
    .then((res) => setRestaurants(res.restaurants))
}

useEffect(() => {
    fetchData()
}, [])

// console.log("my data is", restaurants)
  return (
    <Row>
 { restaurants.map( item => (

    <Col sm={12} md={8} lg={6} xl={3}>
    
      <RestaurantCard  item={item} />

      {/* <h1>{item.name}</h1> */}
    </Col>

      ))}
</Row>
  )
}

export default Home