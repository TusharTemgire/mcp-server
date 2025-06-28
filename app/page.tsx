"use client";

import { useState } from 'react';
const sessionId = 'demo-session';


export default function Home() {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        const res = await fetch('/api/mcp/run', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ sessionId, message: input }),
        });
        const data = await res.json();
        setMessages([...messages, `User: ${input}`, `Assistant: ${data.output}`]);
        setInput('')
        };

        return (
   <div className="p-6 item-center justify-center">
      <h1 className="text-2xl mb-4">MCP Server</h1>
      <div className="mb-2 space-y-1">
        {messages.map((msg: any, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <input
        className="border px-2 py-1 mr-2"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Say something or use tool (e.g., use calculator 5*3)"
      />
      <button className="bg-blue-600 text-white px-3 py-1" onClick={sendMessage}>Send</button>
    </div>
  );
}