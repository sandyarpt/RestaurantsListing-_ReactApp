import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link } from 'react-router-dom'


function RestaurantCard({item}) {
  return (
     <Link to = {`/details/${item.id}`} >
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.photograph} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            {item.neighborhood}
        </Card.Text>
        <Card.Text>
             <p> cuisine:  {item.cuisine_type}</p>   
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default RestaurantCard
