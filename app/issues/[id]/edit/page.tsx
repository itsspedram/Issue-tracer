import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import IssueFormSkelton from "../../_components/IssueFormSkelton";

const IssueForm = dynamic(
  () => import("@/app/issues/_components/IssueForm"),
  { ssr: false ,
    loading:()=> <IssueFormSkelton/>
  }
);

interface Props {
  params: { id: string };
}
const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) return notFound();

  return (
    <div>
      <IssueForm issue={issue} />
    </div>
  );
};

export default EditIssuePage;
