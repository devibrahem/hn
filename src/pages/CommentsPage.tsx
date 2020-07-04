import React from "react";
import { RouteComponentProps } from "@reach/router";
import GetStories from "../components/GetStories";

const CommentsPage: React.FC<RouteComponentProps> = (props) => {
  const storyID: number = Number(props.uri?.slice(10));
  return (
    <>
      <GetStories storyID={storyID} commentsPage={true} />
    </>
  );
};
export default CommentsPage;
