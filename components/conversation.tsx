import { FormEvent, useState } from "react";
import { ChatForm } from "@/components/conversation-form";
import { ChatHeader } from "@/components/conversation-header";
import { ChatMessages } from "@/components/conversation-messages";
import { ChatMessageProps } from "@/components/conversation-message";

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
    <div className="flex flex-col h-full p-4 space-y-2">
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
