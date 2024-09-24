import React from "react";
import { Skeleton } from "@/app/components";
const IssueFormSkelton = () => {
  return (
    <div className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </div>
  );
};

export default IssueFormSkelton;
