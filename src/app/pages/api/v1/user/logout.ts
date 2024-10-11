import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Clear authentication (in a real app, you might clear a session or token)
    res.status(200).json({ message: 'Logged out successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
