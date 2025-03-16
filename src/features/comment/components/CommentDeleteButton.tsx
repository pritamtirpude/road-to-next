"use client";

import useConfirmDialog from "@/components/ConfirmDialog";
import { Button } from "@/components/ui/button";
import { LucideTrash } from "lucide-react";
import { Fragment } from "react";
import { deleteComment } from "../actions/delete-comment";

type CommentDeleteButtonProps = {
  id: string;
};

const CommentDeleteButton = ({ id }: CommentDeleteButtonProps) => {
  const [deleteButton, deleteDialog] = useConfirmDialog({
    action: deleteComment.bind(null, id),
    trigger: (
      <Button variant="outline" size="icon">
        <LucideTrash className="size-4" />
      </Button>
    ),
  });
  return (
    <Fragment>
      {deleteDialog}
      {deleteButton}
    </Fragment>
  );
};

export default CommentDeleteButton;
