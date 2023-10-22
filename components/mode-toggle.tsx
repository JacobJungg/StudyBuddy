/**
 * StudyBuddy Jacob Jung
 * Imported from ui.shadcn libary
 * Was initally a dropdown menu, changed to a
 * button for simplicity
 */

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  //Checks which theme is currently in use
  //After button clcik changes to opposite theme
  return (
  <Button variant="secondary" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    {theme === "light" ? (
      <span>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

      </span>
    ) : (
      <span>
       
          <Moon className=" h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:-rotate-90 dark:scale-100" />
      </span>
    )}
    <span className="sr-only">Toggle theme</span>
  </Button>
);
}
