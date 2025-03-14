import CardCompact from "@/components/CardCompact";
import SignUpForm from "@/features/auth/components/SignUpForm";
import { signInPath } from "@/paths";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Sign Up"
        description="Create an account to get started"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<SignUpForm />}
        footer={
          <Link href={signInPath()} className="text-sm text-muted-foreground">
            Have an account? Sign In now.
          </Link>
        }
      />
    </div>
  );
};

export default SignUpPage;
