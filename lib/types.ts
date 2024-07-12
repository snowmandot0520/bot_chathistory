import { CoreMessage } from "ai";

interface ISession {
  id: number;
  user_id: number;
  name: string;
}

interface IMessage {
  id: number;
  user_id: number;
  role: string;
  content: string;
}

type IMessageWithId = CoreMessage & { id?: string };

export { type ISession, type IMessage, type IMessageWithId };
