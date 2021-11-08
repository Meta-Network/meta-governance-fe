import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from "crypto";
import type { InvitationDto } from '../../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  if (req.method !== 'POST') {
    res.status(404).send(null);
    return;
  }

  const count = Number(req.body.count);
  const applicant = req.body.applicant;
  const reason = req.body.reason;

  if (Number.isNaN(count)) {
    res.status(400).json({ message: 'Bad request' });
    return;
  }

  res.status(200).json(Array.from(generate(count, applicant, reason)));
}

function* generate(count: number, applicant: string, reason: string) {
  for (let i = 0; i < count; i++) {
    yield (<InvitationDto>{
      signature: crypto.randomBytes(32).toString('hex'),
      applicant,
      cause: reason,
      inviter_user_id: 123,
      invitee_user_id: 0,
      matataki_user_id: Math.floor(Math.random() * 10000),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })
  }
}
