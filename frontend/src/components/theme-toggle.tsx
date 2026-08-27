"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="fixed bottom-5 right-[4.75rem] z-50 h-11 w-11" />;
  }

  const isDark = resolvedTheme !== "light";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          size="icon"
          variant="outline"
          aria-label={label}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="fixed bottom-5 right-[4.75rem] z-50 h-11 w-11 rounded-full bg-background/95 shadow-lg backdrop-blur-sm"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={10}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
