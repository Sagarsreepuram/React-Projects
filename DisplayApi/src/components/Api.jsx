import React, { useEffect, useState } from 'react'


const Api = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="container">
      <h1>User List</h1>
      <div className="card-container">
        {user.map((user) => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Pincode:</strong> {user.address.zipcode}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Api
