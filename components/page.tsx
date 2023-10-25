import { auth, redirectToSignIn } from "@clerk/nextjs";

interface ChatIdPageProps {
  params: {
    chatId: string;
  }
}

const ChatIdPage = async ({}: ChatIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }



}
 
export default ChatIdPage;