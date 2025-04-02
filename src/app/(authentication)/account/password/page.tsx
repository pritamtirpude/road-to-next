import CardCompact from "@/components/CardCompact";
import Heading from "@/components/Heading";
import PasswordChangeForm from "@/features/password/components/PasswordChangeForm";
import AccountTabs from "../_navigation/Tabs";

const PasswordPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Password"
        description="Keep your account secure"
        tabs={<AccountTabs />}
      />

      <div className="flex-1 flex flex-col items-center">
        <CardCompact
          title="Change Password"
          description="Enter your current password"
          className="w-full max-w-[420px] animate-fade-in-from-top"
          content={<PasswordChangeForm />}
        />
      </div>
    </div>
  );
};

export default PasswordPage;
