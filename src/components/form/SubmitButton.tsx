"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LucideLoaderCircle } from "lucide-react";
import React, { cloneElement } from "react";
import { cn } from "@/lib/utils";

type SubmitButtonProps = {
  label?: string;
  icon?: React.ReactElement;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

const SubmitButton = ({ label, icon, variant, size }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" variant={variant} size={size}>
      {pending && (
        <LucideLoaderCircle
          className={cn("size-4animate-spin", !!label && "mr-2")}
        />
      )}
      {label}
      {pending ? null : icon ? (
        <span className={cn(!!label && "ml-2")}>
          {React.isValidElement(icon) &&
            cloneElement(icon as React.ReactElement<{ className?: string }>, {
              className: "size-4",
            })}
        </span>
      ) : null}
    </Button>
  );
};

export default SubmitButton;
