import { LucideLoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex flex-1 justify-center items-center flex-col self-center">
      <LucideLoaderCircle className="size-16 animate-spin" />
    </div>
  );
};

export default Spinner;
