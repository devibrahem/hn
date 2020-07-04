import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

interface StoryProps {
  storyID: number;
}
interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

const Story: React.FC<StoryProps> = ({ storyID }) => {
  const data = `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`;

  const [post, setPost] = useState<Story>();
  useEffect(() => {
    fetch(data)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [data]);

  return (
    <>
      {post ? (
        <div>
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            Story Title : {post.title}
          </a>
          <span>
            (
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              {post.url}
            </a>
            )
          </span>
          <p>Story Votes Score : {post.score}</p>
          <Link to="/comments">{post.descendants} comments</Link>
          <hr />
        </div>
      ) : (
        <p>Please wait white fetching the data</p>
      )}
    </>
  );
};
export default Story;
