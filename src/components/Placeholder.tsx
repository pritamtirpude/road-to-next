import { LucideMessageSquareWarning } from "lucide-react";
import React, { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<any>;
  button?: React.ReactElement<any>;
};
const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center self-center gap-y-2">
      {cloneElement(icon, {
        className: "size-16",
      })}
      <h2 className="text-center text-lg">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
};

export default Placeholder;
