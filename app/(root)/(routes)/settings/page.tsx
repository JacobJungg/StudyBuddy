/**
 * StudyBuddy Jacob Jung
 * Settings page
 */
"use client"
import * as React from "react"
import { ChatDiv } from "@/components/chatbot/chatbotdiv"
import { ProfileForm } from "@/app/(root)/(routes)/settings/profile-form"
import { Separator } from "@/components/ui/separator"

import Image from "next/image"

const RootPage = () => {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/examples/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage account.
          </p>
        </div>
        
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
          </aside>
          <div className="flex-1 lg:max-w-2xl">



          <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Others can view this information
        </p>
      </div>
      <Separator />
      <ProfileForm />
      <ChatDiv></ChatDiv>
    </div>












          </div>
        </div>
      </div>
    </>
  )
}

export default RootPage;