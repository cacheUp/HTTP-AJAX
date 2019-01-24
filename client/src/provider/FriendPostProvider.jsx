import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const FriendPostContext = createContext();

function FriendPostProvider(props) {
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        setFriendData(res.data);
      })
      .catch(
        err => {
          console.error(err);
        },
        [friendData]
      );
  });

  const { children } = props;

  return (
    <FriendPostContext.Provider value={friendData}>
      {children}
    </FriendPostContext.Provider>
  );
}

export default FriendPostProvider;
