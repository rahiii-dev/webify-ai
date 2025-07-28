export type AIChatMessage = {
  id: string;
  from: "user" | "assistant";
  content: string;
  avatar: string;
};