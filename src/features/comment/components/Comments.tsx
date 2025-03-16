import CardCompact from "@/components/CardCompact";
import { getAuth } from "@/features/auth/queries/get-auth";
import { isOwner } from "@/features/auth/utils/is-owner";
import { Fragment } from "react";
import { CommentWithMetadata } from "../types";
import CommentCreateForm from "./CommentCreateForm";
import CommentDeleteButton from "./CommentDeleteButton";
import CommentItem from "./CommentItem";

type CommentsProps = {
  ticketId: string;
  comments?: CommentWithMetadata[];
};

const Comments = async ({ ticketId, comments = [] }: CommentsProps) => {
  const { user } = await getAuth();

  return (
    <Fragment>
      <CardCompact
        title="Create Comment"
        description="A new comment will be created"
        content={<CommentCreateForm ticketId={ticketId} />}
      />
      <div className="flex flex-col gap-y-2 ml-8">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            buttons={[
              ...(isOwner(user, comment)
                ? [<CommentDeleteButton key="0" id={comment.id} />]
                : []),
            ]}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Comments;
