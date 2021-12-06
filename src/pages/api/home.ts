// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { HomeData } from 'types/Home'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HomeData>,
): void {
  res
    .status(200)
    .json({ roles: ['Lead Engineer', 'Web Developer', 'Music Enthusiast'] })
}
