"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SelectorDataProps {
  value: string;
  label: string;
}
interface SelectorProps {
  selectorData: SelectorDataProps[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
}

export function SelectorBox(props: SelectorProps) {
  //   const [open, setOpen] = React.useState(false);
  //   const [value, setValue] = React.useState("");

  return (
    <Popover open={props.open} onOpenChange={props.setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={props.open}
          className="w-[200px] justify-between text-red-500"
        >
          {props.value
            ? props.selectorData.find((data) => data.value === props.value)
                ?.label
            : "Select categories..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search categories..." className="h-9" />
          <CommandList>
            <CommandEmpty>No categories found.</CommandEmpty>
            <CommandGroup>
              {props.selectorData.map((data) => (
                <CommandItem
                  key={data.value}
                  value={data.value}
                  onSelect={(currentValue) => {
                    props.setvalue(
                      currentValue === props.value ? "" : currentValue
                    );
                    props.setOpen(false);
                  }}
                >
                  {data.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      props.value === props.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
