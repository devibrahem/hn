import React from "react";
import GetComments from "./GetComments";

interface NestedCommentsProps {
  commentID: number;
}

const NestedComments: React.FC<NestedCommentsProps> = ({ commentID }) => {
  return (
    <>
      <GetComments commentID={commentID} />
    </>
  );
};
export default NestedComments;
