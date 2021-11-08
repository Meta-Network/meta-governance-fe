import React, { useCallback, useState } from 'react'
import type { InvitationDto } from '../../types'

interface Props {
  invitation: InvitationDto
  onSelect: (invitation: InvitationDto) => void
  onUnselect: (invitation: InvitationDto) => void
}

const InvitationRow: React.FC<Props> = ({ invitation, onSelect, onUnselect }: Props) => {
  const onCheckboxChange = useCallback(event => {
    if (event.target.checked) {
      onSelect(invitation)
    } else {
      onUnselect(invitation)
    }
  }, [onSelect, onUnselect])

  return (
    <div>
      <input type="checkbox" onChange={onCheckboxChange} />
      <span>{invitation.signature.substr(0, 6)}</span>
      <span style={{ marginLeft: '1rem' }}>{invitation.applicant}</span>
      <span style={{ marginLeft: '1rem' }}>{invitation.cause}</span>
      <span style={{ marginLeft: '1rem' }}>{invitation.created_at}</span>
    </div>
  )
}

export default InvitationRow
