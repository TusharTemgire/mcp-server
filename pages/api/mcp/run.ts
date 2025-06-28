import type { NextApiRequest, NextApiResponse } from 'next';
import { getContext, addToContext } from '@/utils/contextManager';
import { toolHandler } from '@/utils/tools';
import { OpenAI } from 'openai';

const openai = new OpenAI ({ apiKey: process.env.OPENAI_API_KEY!});


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { sessionId, message } = req.body;
    if (!sessionId || !message) return res.status(400).json({ error: 'Missing Parameters' });


    addToContext(sessionId, 'user', message);

    
    if (message.startsWith('use')) {
        const [, toolName, ...rest] = message.split('');
        const toolOutput = await toolHandler(toolName, rest.join(' '));
        addToContext(sessionId, 'tool', toolOutput);
        return rest.json({ output: toolOutput });

    }

    const history = getContext(sessionId).map(c => ({ role: c.role, content: c.content }));

    const completion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: history as any,
    });

    const reply = completion.choices[0].message.content || 'No response.';
    addToContext(sessionId, 'assistant', reply);
    res.json({ output: reply });

}