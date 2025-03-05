import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import React, { Fragment } from "react";

const AuthorizationLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  await getAuthOrRedirect();

  return <Fragment>{children}</Fragment>;
};

export default AuthorizationLayout;
