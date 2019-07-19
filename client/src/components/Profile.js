import React, { useEffect, useState } from "react";
import {getToken} from './config/getToken'
function Profile({ history }) {
  const [initData, setData] = useState([]);
  useEffect(() => {
   getToken()
    .get('http://localhost:5000/api/restricted/data')
      .then(res => {
        console.log('CLG THE RES.DATA IN PROFILE',res.data)
        setData(res.data)
      })
  }, []);
  return (
    <div>
      <div>Recipe Page</div>
      <div>
        <ul>
        {initData.map((food, i) => (
            <li key={i}>
            <span>Dish Name: {food.name}</span>
            <br></br>
            <span>Course: {food.course}</span>
            <br></br>
            <span>Technique: {food.technique}</span>
          </li>
          ))}
        </ul>
      </div>
      <div>
      <button
        className="btn"
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/");
        }}
        >
        Logout
      </button>
        </div>
    </div>
  );
}

export default Profile;
