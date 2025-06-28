# MCP Server UI

A modern chat interface for interacting with an AI assistant and custom tools, built with Next.js, React, and Tailwind CSS.

---

## ✨ Features

- **Conversational UI:** Clean, responsive chat interface.
- **Tool Commands:** Run tools by typing commands (e.g., `use calculator 5*3`).
- **Session Context:** Remembers your conversation per session.
- **OpenAI Integration:** Powered by GPT-4o for smart responses.
- **Instant Feedback:** Fast, interactive experience.

---

## 🖥️ UI Preview

> ![Screenshot Placeholder](public/next.svg)  
> _Type a message or tool command and get instant replies!_

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Set your OpenAI API key:**  
   Create a `.env` file in the root:
   ```
   OPENAI_API_KEY=your-openai-key
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧑‍💻 How to Use

- **Chat:**  
  Type a message and click **Send**.
- **Use a Tool:**  
  Type `use calculator 5*3` (or similar) to run a tool.
- **See Conversation:**  
  All messages appear in the chat window, labeled by sender.

---

## 🗂️ Project Structure

```
app/
  page.tsx         # Main chat UI
  layout.tsx       # App layout and fonts
  globals.css      # Tailwind and global styles
pages/
  api/mcp/run.ts   # API: chat & tool handler
  api/mcp/context.ts # API: context management
utils/
  contextManager.ts # Session/context logic
  tools.ts          # Tool command logic
public/
  next.svg         # Logo (replace with screenshot if desired)
```

---

## 🎨 UI Details

- **Chat Window:**  
  Shows all messages, styled with Tailwind.
- **Input Bar:**  
  Type your message or tool command.
- **Send Button:**  
  Blue, prominent, easy to use.

---

## 🛠️ Customization

- **Add More Tools:**  
  Edit `utils/tools.ts` to add new commands.
- **Change Styles:**  
  Edit `app/globals.css` or use Tailwind classes in `app/page.tsx`.
- **Session Handling:**  
  See `utils/contextManager.ts` for context logic.

---

## 📄 License

MIT

---

**Built with Next.js, React, Tailwind CSS, and OpenAI.**