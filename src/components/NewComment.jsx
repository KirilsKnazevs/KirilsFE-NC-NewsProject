import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";

function NewComment({ article_id }) {
  const [input, setInput] = useState(" ");

  const { user } = useContext(UserContext);
  const testComment = { username: user.username, body: input };

  function handlePostComment() {
    if (user.username !== undefined) {
      fetch(
        `https://kirils-ncnews.herokuapp.com/api/articles/${article_id}/comments`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(testComment),
        }
      )
        .then((res) => res.json())
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    return <p>Please choose a user</p>;
  }

  return (
    <div>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        type="text"
        placeholder="Write your comment"
      ></input>
      <button onClick={handlePostComment}>PostComment</button>
    </div>
  );
}

export default NewComment;
