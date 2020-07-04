import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import GetComments from "./GetComments";

interface StoryProps {
  storyID: number;
  commentsPage?: boolean;
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

const Story: React.FC<StoryProps> = ({ storyID, commentsPage }) => {
  const fetchData = `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`;

  const [post, setPost] = useState<Story>();
  useEffect(() => {
    fetch(fetchData)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, [fetchData]);

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
          {commentsPage ? (
            post.kids.map((kid) => {
              return <GetComments commentID={kid} />;
            })
          ) : (
            <Link to={`/comments/${post.id}`}>{post.descendants} comments</Link>
          )}
          <hr />
        </div>
      ) : (
        <p>Please wait white fetching the data</p>
      )}
    </>
  );
};
export default Story;
