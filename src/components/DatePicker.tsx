import { format } from "date-fns";
import { LucideCalendar } from "lucide-react";
import { useImperativeHandle, useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export type ImperativeHandleDatepickerRef = {
  reset: () => void;
};

type DatePickerProps = {
  id: string;
  name: string;
  defaultValue?: string | undefined;
  imperativeHandleRef?: React.RefObject<ImperativeHandleDatepickerRef | null>;
};

const DatePicker = ({
  id,
  name,
  defaultValue,
  imperativeHandleRef,
}: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date()
  );

  useImperativeHandle(imperativeHandleRef, () => ({
    reset: () => setDate(new Date()),
  }));

  const [open, setOpen] = useState(false);

  const formattedStringDate = date ? format(date, "yyyy-MM-dd") : "";

  const handleSelect = (date: Date | undefined) => {
    setDate(date);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full" id={id} asChild>
        <Button
          variant="outline"
          className="justify-start text-left font-normal"
        >
          <LucideCalendar className="mr-2 h-4 w-4" />
          {formattedStringDate}
          <input type="hidden" name={name} value={formattedStringDate} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
