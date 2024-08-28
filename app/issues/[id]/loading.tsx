import React from "react";
import Skeleton from "react-loading-skeleton";

const LoadingIssueDetails = () => {
  return (
    <div className="max-w-xl">
      <Skeleton/>
      <div className="flex space-x-3 my-2">
      <Skeleton width="5rem"/>
      <Skeleton width="8rem"/>
      </div>
      <Skeleton count={3}/>
    </div>
)};

export default LoadingIssueDetails;
