import CardCompact from "@/components/CardCompact";
import SignInForm from "@/features/auth/components/SignInForm";
import { passwordForgotPath, signUpPath } from "@/paths";
import Link from "next/link";
import React, { Fragment } from "react";

const SignInPage = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Sign In"
        description="Sign in to your account"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<SignInForm />}
        footer={
          <Fragment>
            <Link href={signUpPath()} className="text-sm text-muted-foreground">
              No account yet?
            </Link>
            <Link
              href={passwordForgotPath()}
              className="text-sm text-muted-foreground"
            >
              Forgot Password?
            </Link>
          </Fragment>
        }
      />
    </div>
  );
};

export default SignInPage;
