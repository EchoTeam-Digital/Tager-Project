import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function getUsers() {

const [users, setUsers] = useState([]);

useEffect(() => {
    axios
      .get('http://localhost:8000/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log('Error from GetUsers');
      });
  }, []);

  
  const usersList =
    users.length === 0
      ? 'there is no users record!'
      : users.map((user, k) => 
      <div>
        <h1>{user.email}</h1>
        <p>{user.password}</p>
        <p>{user.role}</p>
      </div>
      );



  return (
    <div>
        <div className='list'>{usersList}</div>
    </div>
  )
}
