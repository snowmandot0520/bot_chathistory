import React from "react";
import { CoreMessage } from "ai";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IMessageWithId } from "@/lib/types";

function ChatMessage({ msg }: { msg: IMessageWithId }) {
  return (
    <li
      className={cn(
        "max-w-3xl mx-auto w-full flex even:pb-4 items-start gap-2",
        {
          "flex-row-reverse": msg.role === "user",
        }
      )}
    >
      {msg.role === "assistant" && (
        <Avatar className="items-center bg-muted justify-center">
          <AvatarImage src="/soham-ai.png" alt="Soham" />
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn({
          "bg-muted text-foreground rounded-br-none p-2 rounded-lg":
            msg.role === "user",
          "py-2": msg.role === "assistant",
        })}
      >
        {msg.id === "loading-msg" ? (
          <div className="bg-muted-foreground size-6 rounded-full animate-pulse"></div>
        ) : (
          <Markdown className="leading-8 prose text-foreground/75">
            {msg.content as string}
          </Markdown>
        )}
      </div>
    </li>
  );
}

export default ChatMessage;
