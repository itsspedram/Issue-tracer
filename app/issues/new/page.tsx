import React from "react";
import IssueForm from "../_components/IssueForm";
import dynamic from "next/dynamic";
import IssueFormSkelton from "./loading";

const newIssuePage = () => {
  const IssueForm = dynamic(
    () => import("@/app/issues/_components/IssueForm"),
    { ssr: false ,
      loading:()=> <IssueFormSkelton/>
    }
  );
  return (
    <div>
      <IssueForm />
    </div>
  );
};

export default newIssuePage;
