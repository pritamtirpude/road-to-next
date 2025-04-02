import CardCompact from "@/components/CardCompact";
import PasswordForgotForm from "@/features/password/components/PasswordForgotForm";

const PasswordForgotPage = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Forgot Password"
        description="Enter your email address to reset your password"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<PasswordForgotForm />}
      />
    </div>
  );
};

export default PasswordForgotPage;
