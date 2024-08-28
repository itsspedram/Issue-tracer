import { Status } from "@prisma/client";
import React from "react";
import { Badge } from "@radix-ui/themes";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "closed", color: "green" },
};
const IssueBadgeComponent = ({ status }: { status: Status }) => {
  return (
    <div>
      <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
    </div>
  );
};

export default IssueBadgeComponent;
