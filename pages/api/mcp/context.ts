import type { NextApiRequest, NextApiResponse } from 'next';
import { getContext, addToContext } from '@/utils/contextManager';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const sessionId = req.query.sessionId as string;
    if (!sessionId) return res.status(400).json({ error: 'Missing sessionId' });

    if (req.method === 'GET') {
        return res.json({
            context: getContext(sessionId) });

        }

        if (req.method === 'POST') {
            const { role, content } = req.body;
            addToContext(sessionId, role, content);
            return res.status(200).json({ message: 'Added'});

        }
        res.status(405).end();
    }
