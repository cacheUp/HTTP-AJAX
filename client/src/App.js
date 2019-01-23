import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        setFriendData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  });
  return (
    <div className="App">
      {friendData.map(friend => (
        <div className="friend-item">
          <div className="friend-div">
            <h1>{friend.name}</h1>
            <p>{`age: ${friend.age}`}</p>
            <p>{`email: ${friend.email}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
