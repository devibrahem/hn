import React, { useState, useEffect } from "react";

interface getCommentsProps {
  commentID: number;
}

interface Comments {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

const GetComments: React.FC<getCommentsProps> = ({ commentID }) => {
  const fetchData = `https://hacker-news.firebaseio.com/v0/item/${commentID}.json?print=pretty`;

  const [comment, setComment] = useState<Comments>();
  useEffect(() => {
    fetch(fetchData)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComment(data);
      });
  }, [fetchData]);

  return (
    <>
      {comment ? (
        <p style={{ fontSize: "12px" }}>{comment.text}</p>
      ) : (
        <p>no comments yet</p>
      )}
    </>
  );
};
export default GetComments;
