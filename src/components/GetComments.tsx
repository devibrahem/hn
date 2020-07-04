import React, { useState, useEffect } from "react";
import NestedComments from "./NestedComments";

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
        setComment(data);
      });
  }, [fetchData]);

  return (
    <>
      {comment ? (
        <ul>
          <li style={{ fontSize: "12px" }}>{comment.text}</li>
          {comment.kids
            ? comment.kids.map((kid) => {
                return <NestedComments commentID={kid} />;
              })
            : null}
        </ul>
      ) : (
        <p>no comments yet</p>
      )}
    </>
  );
};
export default GetComments;
