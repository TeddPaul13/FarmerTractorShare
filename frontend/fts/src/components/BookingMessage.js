import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OffcanvasNavbar from './OffcanvasNavbar'

function BookingMessage() {
  return (
    <div>
        <OffcanvasNavbar />
        <Container className='d-flex justify-content-center align-items-center'>
        <Card className='d-flex justify-content-center align-items-center'>
          <Card.Body>
            <Card.Title className='mb-4 fs-2'>Your Booking Has Been Confrimed</Card.Title>
            {/* <Card.Subtitle className=" mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <Card.Text className='fs-4'> 
              Please Check your email for further information. It takes a few munites for the email to appear. Don't forget to check your Spam or Junk folder.
            </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
            <Link to="/landingpage" className='text-decoration-none'>View more Tractors</Link>
          </Card.Body>
        </Card>
        </Container>
      </div>
  )
}

export default BookingMessage