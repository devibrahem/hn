import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import Story from "../components/Story";

const HomePage: React.FC<RouteComponentProps> = () => {
  const [topStoreisIDs, setTopStoriesIDs] = useState<number[]>([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((res) => res.json())
      .then((data) => {
        setTopStoriesIDs(data);
      });
  }, []);

  return (
    <>
      {topStoreisIDs.map((storyID) => {
        return <Story storyID={storyID} />;
      })}
    </>
  );
};
export default HomePage;
