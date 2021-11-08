import React from 'react'
import type { InvitationDto } from '../../types'
import InvitationRow from '../InvitationRow'

interface Props {
  invitations: Array<InvitationDto>
  onSelect: (invitation: InvitationDto) => void
  onUnselect: (invitation: InvitationDto) => void
}

const InvitationList: React.FC<Props> = ({ invitations, onSelect, onUnselect }: Props) => {
  const rows = invitations.map((item, index) => (
    <InvitationRow key={index} invitation={item} onSelect={onSelect} onUnselect={onUnselect} />)
  )

  return (
    <div>
      <h3>历史记录</h3>
      {rows}
    </div>
  )
}

export default InvitationList
