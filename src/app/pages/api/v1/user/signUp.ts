import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Add your user creation logic here, e.g., saving to a database
    res.status(200).json({ message: 'User signed up successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
