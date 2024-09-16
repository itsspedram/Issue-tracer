import React from "react";
import ReactMarkdown from "react-markdown";
import { Card, Heading } from "@radix-ui/themes";
import { IssueBadgeComponent } from "../../components";
import { Issue } from "@prisma/client";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <div>
      <Heading className="mt-2">{issue.title}</Heading>
      <div className="flex space-x-3 my-2">
        <div>{issue.createdAt.toDateString()}</div>
        <IssueBadgeComponent status={issue.status} />
      </div>

      <Card>
        <ReactMarkdown className="prose">{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetails;
