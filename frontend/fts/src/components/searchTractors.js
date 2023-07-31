import React from 'react'
import { useState } from 'react'

function searchTractors(props) {
const[input, setInput] = useState("")
const setSearchResults = props.setSearchResults
const tractors = props.tractorList

const fetchTeamDetails = (value) => {
    if (value) {
      const searchResults = tractorList.filter((tractor) => {
        return tractor.postcode && tractor.postcode.toLowerCase().includes(value);
      });
      setSearchResults(searchResults);
    } else {
      setSearchResults(tractors);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchTeamDetails(value);
  };

  return (
    <div><Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Enter Postcode Here"
      className="me-2"
      aria-label="Search"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
    />
  </Form></div>
  )
}

export default searchTractors