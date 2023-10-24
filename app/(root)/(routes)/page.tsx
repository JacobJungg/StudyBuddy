/**
 * StudyBuddy Jacob Jung
 * Main page
 */

"use client";

import * as React from "react"
import * as z from "zod";
import { MessagesSquare, Plus, Calculator, CreditCard, AlarmCheck, Settings, Smile, User  } from "lucide-react";
import { useForm } from "react-hook-form";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
//Named @hookform not an address
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { formSchema } from "./constants";
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"



const RootPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          prompt: ""
        }
      });

      const [date, setDate] = React.useState<Date | undefined>(new Date())
      const isLoading = form.formState.isSubmitting;
  
      const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
      }



}

export default RootPage;