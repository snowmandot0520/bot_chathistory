import ChatBox from "@/components/chat-box";
import { getMessages } from "@/lib/actions/messages";

async function ChatPage() {
  const messages = await getMessages();
  return <ChatBox dbMessages={messages} />;
}

export default ChatPage;
