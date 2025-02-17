"use client";

import { deleteCookiesByKey, getCookieByKey } from "@/actions/cookies";
import { useEffect } from "react";
import { toast } from "sonner";

const RedirectToast = () => {
  useEffect(() => {
    const showCookieToast = async () => {
      const message = await getCookieByKey("toast");

      if (message) {
        toast.success(message);
        await deleteCookiesByKey("toast");
      }
    };

    showCookieToast();
  }, []);
  return null;
};

export default RedirectToast;
