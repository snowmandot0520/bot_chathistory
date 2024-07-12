"use client";

import { type CoreMessage } from "ai";
import React from "react";

import ChatMessage from "@/components/chat-message";
import ChatInput from "@/components/chat-input";

// export const dynamic = "force-dynamic";
// export const maxDuration = 30;

export default function ChatBox({ dbMessages }: { dbMessages: CoreMessage[] }) {
  const [messages, setMessages] = React.useState<CoreMessage[]>(dbMessages);

  const scrollRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col w-full pt-4 mx-auto flex-1 h-full justify-between">
      <ul className="mb-4 space-y-4 overflow-y-auto" ref={scrollRef}>
        {messages.map((m, i) => (
          <ChatMessage key={i} msg={m} />
        ))}
      </ul>

      <ChatInput messages={messages} setMessages={setMessages} />
    </div>
  );
}
