import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    number: "",
    wname: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);

    setUser(res.data);
  };

  return (
    <div className='container'>
      <h1 className='display-4'> User Id: {id} </h1>
      <hr />
      <ul className='list-group w-50'>
        <li className='list-group-item'> name: {user.name} </li>
        <li className='list-group-item'> Username: {user.username} </li>
        <li className='list-group-item'> email: {user.email} </li>
        <li className='list-group-item'> Phone No.: {user.number} </li>
        <li className='list-group-item'> Website: {user.wname} </li>
      </ul>
      <Link className='btn btn-primary mt-4' to='/'>
        Back to Home
      </Link>
    </div>
  );
};

export default User;
