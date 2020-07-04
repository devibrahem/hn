import React from "react";
import { RouteComponentProps } from "@reach/router";
import Story from "../components/Story";

interface CommentsPageProps {}

const CommentsPage: React.FC<RouteComponentProps> = (props) => {
  const storyID: number = Number(props.uri?.slice(10));
  return (
    <>
      <Story storyID={storyID} commentsPage={true} />
    </>
  );
};
export default CommentsPage;
