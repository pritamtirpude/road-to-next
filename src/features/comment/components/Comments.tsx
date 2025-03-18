"use client";

import CardCompact from "@/components/CardCompact";
import { Button } from "@/components/ui/button";
import { Fragment, useState } from "react";
import { getComments } from "../queries/get-comments";
import { CommentWithMetadata } from "../types";
import CommentCreateForm from "./CommentCreateForm";
import CommentDeleteButton from "./CommentDeleteButton";
import CommentItem from "./CommentItem";

type CommentsProps = {
  ticketId: string;
  paginatedComments: {
    list: CommentWithMetadata[];
    metadata: {
      count: number;
      hasNextPage: boolean;
    };
  };
};

const Comments = ({ ticketId, paginatedComments }: CommentsProps) => {
  const [comments, setComments] = useState(paginatedComments.list);
  const [metadata, setMetadata] = useState(paginatedComments.metadata);

  const handleMore = async () => {
    const morePaginatedComments = await getComments(ticketId, comments.length);
    const moreComments = morePaginatedComments.list;

    setComments([...comments, ...moreComments]);
    setMetadata(morePaginatedComments.metadata);
  };

  const handleDeleteButton = async (id: string) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== id)
    );
  };

  const handleCreateComment = (comment: CommentWithMetadata | undefined) => {
    if (!comment) return;

    setComments((prevComments) => [comment, ...prevComments]);
  };

  return (
    <Fragment>
      <CardCompact
        title="Create Comment"
        description="A new comment will be created"
        content={
          <CommentCreateForm
            ticketId={ticketId}
            onCreateComment={handleCreateComment}
          />
        }
      />
      <div className="flex flex-col gap-y-2 ml-8">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            buttons={[
              ...(comment.isOwner
                ? [
                    <CommentDeleteButton
                      key="0"
                      id={comment.id}
                      onDeleteComment={handleDeleteButton}
                    />,
                  ]
                : []),
            ]}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center ml-8">
        {metadata.hasNextPage && (
          <Button variant="ghost" onClick={handleMore}>
            More
          </Button>
        )}
      </div>
    </Fragment>
  );
};

export default Comments;
