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



    return (
        //Margain move everything down (to close to header)
        <div className="mt-10">
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
  
    <div>
    <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        style={{ width: '300px', height: '365px' }} // Adjust the width and height as needed
      />
    </div>

    <div>
      <img src="https://media.tenor.com/1VEnfKkMGikAAAAd/lofi-girl-music.gif" />
    </div>

    <div>
    <Command className="rounded-lg border shadow-md" style={{ width: '300px', height: '365px' }}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <AlarmCheck  className="mr-2 h-4 w-4" />
            <span>Timer</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Take a break</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>

    </div>

    </div>







          <div style={{ margin: '0 20px' }}>
<div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">When was WW1?</div>
                    <p className="text-xs text-muted-foreground">
                      July 28, 1914
                    </p>
                  </CardContent>
                </Card>



                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Math
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Solve for x, 4 + x = 7</div>
                    <p className="text-xs text-muted-foreground">
                      x = 3
                    </p>
                  </CardContent>
                </Card>



                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Science</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">What is the third element?</div>
                    <p className="text-xs text-muted-foreground">
                      Lithium
                    </p>
                  </CardContent>
                </Card>



                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                  <div
                    className="plus-icon"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                    >
                      <Plus width="40" height="40" fill="currentColor" />
                    </div>
                    <p className="text-xs text-muted-foreground">    
                      Create new flashcard
                    </p>
                  </CardContent>
                </Card>
              </div>
              </div>
              
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
        </div>

        
    );
}

export default RootPage;