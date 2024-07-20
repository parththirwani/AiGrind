"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  streakDates: Date[];
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  streakDates = [],
  ...props
}: CalendarProps) {
  const modifiers = {
    streak: streakDates,
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-6", className)} // Increased padding
      classNames={{
        months: "flex flex-col sm:flex-row space-y-6 sm:space-x-6 sm:space-y-0",
        month: "space-y-6",
        caption: "flex justify-center relative items-center",
        caption_label: "text-sm font-medium", // Small text size
        nav: "space-x-2 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-10 w-10 bg-transparent p-0 opacity-70 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-2",
        nav_button_next: "absolute right-2",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-12 font-normal text-xs", // Small text size
        row: "flex w-full mt-4",
        cell: "h-12 w-12 text-center text-xs p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-12 w-12 p-0 font-normal aria-selected:opacity-100 text-xs"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-60 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-40",
        day_disabled: "text-muted-foreground opacity-60",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        //@ts-ignore
        day_streak: "relative",
        ...classNames,
      }}
      modifiers={modifiers}
      modifiersClassNames={{
        streak: "day-streak",
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-6 w-6" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-6 w-6" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };