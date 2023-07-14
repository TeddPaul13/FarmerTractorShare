import React from 'react';
import Card from 'react-bootstrap/Card';

export default function DetaileCardOnFirstPage() {
  return (
    <Card className='firstPagecard text-start'>
      <Card.Body>
        <Card.Title className='mb-4 fs-1'>Hire a tractor from a farmer near you.</Card.Title>
        {/* <Card.Subtitle className=" mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text className='fs-3'> 
          Simply sign in or create an account to connect with farmers near you.
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  )
}
