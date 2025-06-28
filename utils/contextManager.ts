import { v4 as uuid } from "uuid";

interface ContextItem {
  id: string;
  role: "user" | "assistant" | "tool";
  content: string;
  timestamp: number;
}

const memory: Record<string, ContextItem[]> = {};

export function getContext(sessionId: string): ContextItem[] {
  return memory[sessionId] || [];
}

export function addToContext(
  sessionId: string,
  role: "user" | "assistant" | "tool",
  content: string
) {
  if (!memory[sessionId]) memory[sessionId] = [];
  memory[sessionId].push({
    id: uuid(),
    role,
    content,
    timestamp: Date.now(),
  });
}

export function clearContext(sessionId: string) {
  memory[sessionId] = [];
}
