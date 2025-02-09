import TicketCreateForm from "@/features/ticket/components/TicketCreateForm";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { title } from "process";

type CardCompactProps = {
  title: string;
  description: string;
  content: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
};
const CardCompact = ({
  title,
  description,
  content,
  className,
  footer,
}: CardCompactProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default CardCompact;
