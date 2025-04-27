"use client";

import FieldError from "@/components/form/FieldError";
import Form from "@/components/form/Form";
import SubmitButton from "@/components/form/SubmitButton";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useActionState } from "react";
import { emailVerification } from "../actions/email-verification";

const EmailVerificationForm = () => {
  const [actionState, action] = useActionState(
    emailVerification,
    EMPTY_ACTION_STATE
  );
  return (
    <Form action={action} actionState={actionState}>
      <InputOTP
        name="code"
        defaultValue={actionState.payload?.get("code") as string}
        maxLength={8}
      >
        <InputOTPGroup>
          {Array.from({ length: 8 }).map((_, index) => (
            <InputOTPSlot index={index} key={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <FieldError actionState={actionState} name="code" />

      <SubmitButton label="Verify Email" />
    </Form>
  );
};

export default EmailVerificationForm;
