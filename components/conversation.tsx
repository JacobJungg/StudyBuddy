"use client";

//Global Imports
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Comfortaa } from "next/font/google";
import { BookOpenText   } from "lucide-react";

//Local Imports
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ModeToggle } from "./mode-toggle";
import * as React from "react"
import * as z from "zod";
import { MessagesSquare, Plus, Calculator, CreditCard, AlarmCheck, Settings, Smile, User  } from "lucide-react";
import { useForm } from "react-hook-form";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
//Named @hookform not an address
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

const font = Comfortaa({ weight: "600", subsets: ["latin"] });


export const Navbar = () => {
    return (
        <div className="mt-24">
        <Heading
            title="Conversation"
            description="Ask your friend a question"
            icon={MessagesSquare }
        />
        
              <div className="px-4 lg:px-8">
            <div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="
                            rounded-lg
                            border
                            w-full
                            p-4
                            px-3
                            md:px-6
                            focus-within:shadow-sm
                            grid
                            grid-cols-12
                            gap-2
                            "
                            >
                                <FormField 
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                    <FormControl className="m-0 p-0">
                                      <Input
                                        className="
                                        border-0 
                                        outline-none 
                                        focus-visible:ring-0 
                                        focus-visible:ring-transparent
                                        "
                                        disabled={isLoading} 
                                        placeholder="Whats the binary number for 13?" 
                                        {...field}
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                            />
                            <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                                Generate
                            </Button>
                    </form>
                </Form>
            </div>

        </div>
        </div>
    );
};