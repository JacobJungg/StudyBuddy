import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { ChatClient } from "@/components/conversation";

interface ChatIdPageProps {
  params: {
    chatId: string;
  }
}

const ChatIdPage = async ({
  params
}: ChatIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }



}
 
export default ChatIdPage;