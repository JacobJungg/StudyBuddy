/**
 * StudyBuddy Jacob Jung
 * Main page contents import
 */

"use client";

import * as React from "react"
import { ChatClient } from "@/chat/main-chat";

const RootPage = () => {
  return (
    <div className="h-full p-4 space-y-2">
  <ChatClient />
    </div>
  )
}

export default RootPage;