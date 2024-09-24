import React from "react";
import { Skeleton } from "@/app/components";
const LoadingEditIssue = () => {
  return (
    <div className="max-w-xl">
      <Skeleton/>
      <Skeleton height="20rem" count={3}/>
    </div>
)};

export default LoadingEditIssue;
