import { CoreMessage } from "ai";
import { readStreamableValue } from "ai/rsc";
import { continueConversation } from "@/lib/actions/chat";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { createMessage } from "@/lib/actions/messages";
import LoadingIcon from "./loading";
import { IMessageWithId } from "@/lib/types";

interface ChatInputProps {
  messages: IMessageWithId[];
  setMessages: (messages: IMessageWithId[]) => void;
}

function ChatInput({ messages, setMessages }: ChatInputProps) {
  const [input, setInput] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  async function handleGenerate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isLoading) return;
    if (!input) return;

    const newMsg: IMessageWithId = { content: input, role: "user" };
    const newMessages: IMessageWithId[] = [...messages, newMsg];

    setMessages(newMessages);
    setInput("");

    setIsLoading(true);

    setMessages([
      ...newMessages,
      {
        id: "loading-msg",
        role: "assistant",
        content: "Typing...",
      },
    ]);

    await createMessage(newMsg);

    const result = await continueConversation(newMessages);

    for await (const content of readStreamableValue(result)) {
      const newMessagesToPass = newMessages.filter(
        (msg) => msg.id !== "loading-msg"
      );
      setMessages([
        ...newMessagesToPass,
        {
          role: "assistant",
          content: content as string,
        },
      ]);
    }

    setIsLoading(false);
  }

  return (
    <form
      className="w-full max-w-3xl sticky bottom-0 mt-8 mx-auto shrink-0"
      onSubmit={handleGenerate}
    >
      <div className="relative">
        <Input
          autoFocus
          className="w-full h-12 bg-secondary"
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="outline"
          className="absolute top-1/2 right-2 -translate-y-1/2"
          size="icon"
          type="submit"
          disabled={!input || isLoading}
          loading={isLoading}
          loadingText=""
        >
          <ArrowUpIcon />
        </Button>
      </div>
    </form>
  );
}

export default ChatInput;
