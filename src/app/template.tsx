import RedirectToast from "@/components/RedirectToast";
import { Fragment } from "react";

type RootTemplateProps = {
  children: React.ReactNode;
};

export default function RootTemplate({ children }: RootTemplateProps) {
  return (
    <Fragment>
      <Fragment>{children}</Fragment>
      <RedirectToast />
    </Fragment>
  );
}
