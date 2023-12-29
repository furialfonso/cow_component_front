import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom'

export const ListComponents = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate()

  const options = [
    { key: 'users' },
    { key: 'others' },
  ];

  useEffect(() => {
    navigate('/' + selectedOption)
  }, [selectedOption]);


  return (
    <form action='#'>
      <Dropdown onSelect={setSelectedOption}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedOption || 'Select component'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((option) => (
            <Dropdown.Item key={option.key} eventKey={option.key}>{option.key}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </form>
  );

}
