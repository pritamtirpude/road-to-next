import { emailVerficationPath, signInPath } from "@/paths";
import { redirect } from "next/navigation";
import { getAuth } from "./get-auth";

type GetAuthOrRedirectOptions = {
  checkEmailVerified: boolean;
};

export const getAuthOrRedirect = async (options?: GetAuthOrRedirectOptions) => {
  const { checkEmailVerified = true } = options ?? {};

  const auth = await getAuth();

  if (!auth.user) {
    redirect(signInPath());
  }

  if (checkEmailVerified && !auth.user.emailVerified) {
    redirect(emailVerficationPath());
  }

  return auth;
};
