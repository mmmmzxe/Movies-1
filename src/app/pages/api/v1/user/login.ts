import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Add your authentication logic here
    if (email === 'test@example.com' && password === 'password123') {
      // In a real app, you'd use sessions or JWT tokens
      res.status(200).json({ message: 'Logged in successfully' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
