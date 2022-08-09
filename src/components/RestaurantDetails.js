import React from 'react'
import { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import {Row,Col,ListGroup, Image ,Card} from 'react-bootstrap'
import Review  from './Review'
 

function RestaurantDetails() {

  const[data, setData]=useState([])

  const params=useParams()

  async function fetchData() {
    await fetch('/restaurants.json')
    .then((data)=>data.json())
    .then((res) => setData(res.restaurants))
}

 useEffect(() => {
  fetchData()
 }, [])

// console.log("my id is", params.id);  //  path='/details/:id' ->   from app.js,  id is set in the app.js 
// console.log(data);

const restaurantData= data.find((item)=>item.id==params.id)
// console.log("my details is ", restaurantData);
  return (
  <div>
    <Link  className= "btn btn-outline-dark my-2 rounded btn-sm" to='/' >Back</Link>
    {
    // <h1>restaurantData</h1>
    // <h1>{restaurantData.name}</h1>
   
    restaurantData ? (
      <Row className='my-3'>
        <Col md={3}>
          <Image className='img' src={restaurantData.photograph} alt={restaurantData.name} fluid />
        </Col>

        <Col md={4}>
          <ListGroup.Item>
            <h2>{restaurantData.name}</h2>
            <p>{restaurantData.neighborhood}</p>
           </ListGroup.Item>
           <ListGroup.Item>
           <p> Cuisine Type : {restaurantData.cuisine_type}</p>
           </ListGroup.Item>
           <ListGroup.Item>
           <p> address : {restaurantData.address}</p>
           </ListGroup.Item>
        </Col>

        <Col md={4}>
          <ListGroup.Item>
            <h4>Operating Hours:</h4>
            <p> Monday :{restaurantData.operating_hours.Monday}</p>
            <p> Tuesday :{restaurantData.operating_hours.Tuesday}</p>
            <p> Wednesday :{restaurantData.operating_hours.Wednesday}</p>
            <p> Thursday :{restaurantData.operating_hours.Thursday}</p>
            <p> Friday :{restaurantData.operating_hours.Friday}</p>
            <p> Saturday :{restaurantData.operating_hours.Thursday}</p>
            <p> Sunday :{restaurantData.operating_hours.Friday}</p>
           </ListGroup.Item>
        </Col>
        <Row>
          <Card className='my-3 mx-3 p-3 rounded card'>
            <Review  data={restaurantData.reviews}/>
          </Card>
        </Row>
      </Row>
    ) :'null'
    }

  </div>

  )
}

export default RestaurantDetails

