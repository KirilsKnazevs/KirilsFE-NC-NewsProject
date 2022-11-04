import React from "react";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/User";

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  console.log(user);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://kirils-ncnews.herokuapp.com/api/users`)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setUsers(response.usersList);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h3>UserList:</h3>
      {users.map(({ username, name, avatar_url }) => {
        return (
          <div key={username}>
            <button onClick={() => setUser({ username })}>{username}</button>
          </div>
        );
      })}
    </>
  );
}

export default UserList;
