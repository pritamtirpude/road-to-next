import { useEffect, useRef } from "react";
import { ActionState } from "../utils/to-action-state";

type OnArgs = {
  actionState: ActionState;
};

type useActionFeedbackOptions = {
  onSuccess?: (onArgs: OnArgs) => void;
  onError?: (onArgs: OnArgs) => void;
};

function useActionFeedback(
  actionState: ActionState,
  options: useActionFeedbackOptions
) {
  const prevTimestamp = useRef(actionState.timestamp);
  const isUpdate = prevTimestamp.current !== actionState.timestamp;

  useEffect(() => {
    if (!isUpdate) return;

    if (actionState.status === "SUCCESS") {
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      if (options.onError) {
        options.onError?.({ actionState });
      }
    }

    prevTimestamp.current = actionState.timestamp;
  }, [isUpdate, actionState, options]);
}

export default useActionFeedback;
