import React from "react";
import { useState } from "react";

function Votes({ votes, article_id }) {
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);
  const upVotesOnApi = { inc_votes: 1 };
  const downVotesOnApi = { inc_votes: -1 };

  function handleUpVotes() {
    setUpVote((currentVotes) => currentVotes + 1);
    fetch(`https://kirils-ncnews.herokuapp.com/api/articles/${article_id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(upVotesOnApi),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleDownVotes() {
    setDownVote((currentVotes) => currentVotes - 1);
    fetch(`https://kirils-ncnews.herokuapp.com/api/articles/${article_id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(downVotesOnApi),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <p>Total Votes: {votes + upVote + downVote}</p>
      <button disabled={upVote !== 0} onClick={handleUpVotes}>
        Upvote ⬆
      </button>
      <button disabled={downVote !== 0} onClick={handleDownVotes}>
        Downvote ⬇
      </button>
    </div>
  );
}

export default Votes;
