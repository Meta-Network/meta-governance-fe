export interface Invitation {
  signature: string
  applicant: string
  reason: string
  message: string
  createdAt: Date
}

export interface InvitationDto {
  id: number
  sub: string
  signature: string
  salt: string
  issuer: string
  applicant: string
  message: string
  cause: string
  invitee_user_id: number
  inviter_user_id: number
  matataki_user_id: number
  experied_at: string | null
  created_at: string
  updated_at: string
}
