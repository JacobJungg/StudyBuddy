/**
 * StudyBuddy Jacob Jung
 * Homepage
 */



import * as React from "react"
import { ChatDiv } from "@/components/chatbot/chatbotdiv"
import {Dashboardbutton} from "@/components/dashboard-redirects"

const RootPage = () => {
  return (
    <div> 
      <Dashboardbutton></Dashboardbutton>
      <ChatDiv></ChatDiv>
    </div>
  )
}

export default RootPage;