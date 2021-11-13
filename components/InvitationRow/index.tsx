import React, { useCallback, useState } from 'react'
import useHistory from '../../hooks/useHistory'
import type { Invitation } from '../../types'

interface Props {
  invitation: Invitation
  onSelect: (invitation: Invitation) => void
  onUnselect: (invitation: Invitation) => void
}

const InvitationRow: React.FC<Props> = ({ invitation, onSelect, onUnselect }: Props) => {
  const { selectedInvitations } = useHistory()

  const onCheckboxChange = useCallback(event => {
    if (event.target.checked) {
      onSelect(invitation)
    } else {
      onUnselect(invitation)
    }
  }, [onSelect, onUnselect])

  const isSelected = Boolean(selectedInvitations.find(selected => selected.signature === invitation.signature))

  return (
    <div>
      <input type="checkbox" checked={isSelected} onChange={onCheckboxChange} />
      <span>{invitation.signature.substr(0, 6)}</span>
      <span style={{ marginLeft: '1rem' }}>{invitation.applicant}</span>
      <span style={{ marginLeft: '1rem' }}>{invitation.reason}</span>
      <span style={{ marginLeft: '1rem' }}>{invitation.message}</span>
      <span style={{ marginLeft: '1rem' }}>{invitation.createdAt}</span>
    </div>
  )
}

export default InvitationRow
