"use client";

import { deleteCookiesByKey, getCookieByKey } from "@/actions/cookies";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const RedirectToast = () => {
  const pathname = usePathname();

  useEffect(() => {
    const showCookieToast = async () => {
      const message = await getCookieByKey("toast");

      if (message) {
        toast.success(message);
        await deleteCookiesByKey("toast");
      }
    };

    showCookieToast();
  }, [pathname]);
  return null;
};

export default RedirectToast;
