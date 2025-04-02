import CardCompact from "@/components/CardCompact";
import PasswordResetForm from "@/features/password/components/PasswordResetForm";

type PasswordResetPageProps = {
  params: Promise<{
    tokenId: string;
  }>;
};

const PasswordResetPage = async ({ params }: PasswordResetPageProps) => {
  const { tokenId } = await params;
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="New Password"
        description="Enter new password for your account"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<PasswordResetForm tokenId={tokenId} />}
      />
    </div>
  );
};

export default PasswordResetPage;
