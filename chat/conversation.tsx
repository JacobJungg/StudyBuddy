import { FormEvent, useState } from "react";
import { ChatForm } from "@/chat/conversation-form";
import { ChatHeader } from "@/chat/conversation-header";
import { ChatMessages } from "@/chat/conversation-messages";
import { ChatMessageProps } from "@/chat/conversation-message";

export const ChatClient = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const isLoading = false;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userMessage: ChatMessageProps = {
      role: "user",
      content: input,
    };

    setMessages((current) => [...current, userMessage]);

    setInput("");
  };

  return (
    <div className="flex flex-col h-full space-y-2">
      <ChatHeader />
      <ChatMessages isLoading={isLoading} messages={messages} />
      <ChatForm
        isLoading={isLoading}
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};
