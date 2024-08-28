import IssueBadgeComponent from "@/app/components/IssueBadgeComponent";
import prisma from "@/prisma/client";
import { Card, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { id: string };
}
const IssueDetailsPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <>
      <Heading className="mt-2">{issue.title}</Heading>
      <div className="flex space-x-3 my-2">
        <div>{issue.createdAt.toDateString()}</div>
        <IssueBadgeComponent status={issue.status} />
      </div>

      <Card>
        <ReactMarkdown className="prose">{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetailsPage;
