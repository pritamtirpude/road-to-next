import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";

export const TICKET_ICONS = {
  OPEN: <LucideFileText size={20} />,
  IN_PROGRESS: <LucidePencil size={20} />,
  DONE: <LucideCircleCheck size={20} />,
};

export const TICKET_STATUS_LABELS = {
  OPEN: "Open",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
