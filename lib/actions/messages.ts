"use server";

import { revalidatePath } from "next/cache";
import { CoreMessage } from "ai";
import { createClient } from "../supabase/server";
import { getUser } from "./auth";

export async function getMessages() {
  const supabase = createClient();

  const user = await getUser();

  const { data, error } = await supabase
    .from("messages")
    .select("role, content, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);

  return data;
}

export async function createMessage(message: CoreMessage) {
  const supabase = createClient();

  const user = await getUser();

  const { error } = await supabase
    .from("messages")
    .insert([
      {
        user_id: user.id,
        role: message.role,
        content: message.content,
      },
    ])
    .single();

  if (error) throw new Error(error.message);
}

export async function clearMessages() {
  console.log("Clearing messages");
  const supabase = createClient();

  const user = await getUser();

  const { error } = await supabase
    .from("messages")
    .delete()
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);

  revalidatePath("/chat", "page");
}
