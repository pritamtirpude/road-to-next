"use client";

import useConfirmDialog from "@/components/ConfirmDialog";
import { Button } from "@/components/ui/button";
import { LucideLoaderCircle, LucideTrash } from "lucide-react";
import { Fragment } from "react";
import { deleteComment } from "../actions/delete-comment";

type CommentDeleteButtonProps = {
  id: string;
  onDeleteComment?: (id: string) => void;
};

const CommentDeleteButton = ({
  id,
  onDeleteComment,
}: CommentDeleteButtonProps) => {
  const [deleteButton, deleteDialog] = useConfirmDialog({
    action: deleteComment.bind(null, id),
    trigger: (isPending) => (
      <Button variant="outline" size="icon">
        {isPending ? (
          <LucideLoaderCircle className="size-4 animate-spin" />
        ) : (
          <LucideTrash className="size-4" />
        )}
      </Button>
    ),
    onSuccess: () => onDeleteComment?.(id),
  });
  return (
    <Fragment>
      {deleteDialog}
      {deleteButton}
    </Fragment>
  );
};

export default CommentDeleteButton;
