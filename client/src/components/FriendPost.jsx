import React, { useContext } from "react";
import { FriendPostContext } from "../provider/FriendPostProvider";

function FriendPost() {
  const friends = useContext(FriendPostContext);

  return (
    <div>
      {friends.map(friend => (
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

export default FriendPost;
