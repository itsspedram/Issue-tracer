import prisma from "@/prisma/client";
import { Box } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditButton from "./EditButton";
import IssueDetails from "./IssueDetails";

interface Props {
  params: { id: string };
}
const IssueDetailsPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <IssueDetails issue={issue} />
      <Box className="my-auto">
        <EditButton issueId={issue.id} />
      </Box>
    </div>
  );
};

export default IssueDetailsPage;
