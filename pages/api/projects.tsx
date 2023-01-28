import type { NextApiRequest, NextApiResponse } from 'next';

import { IProject } from '@/types/types';
import { projects } from './data/projects';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[]>
) {
  if (req.method === 'GET') {
    res.status(200).json(projects);
  }
}
