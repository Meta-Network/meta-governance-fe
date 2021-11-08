import type { NextPage } from 'next'
import { useCallback, useState } from 'react'
import BatchGeneratorInput from '../../components/BatchGeneratorInput'
import InvitationList from '../../components/InvitationList'
import type { InvitationDto } from '../../types'

const BatchGeneratorPage: NextPage = () => {
  const [invitations, setInvitations] = useState<Array<InvitationDto>>([])

  const onGenerated = useCallback((newInvitations: Array<InvitationDto>) => {
    setInvitations(invitations => [...invitations, ...newInvitations])
  }, [setInvitations])

  const [selected, setSelected] = useState<Array<InvitationDto>>([])

  const onInvitationSelected = useCallback((invitation: InvitationDto) => {
    setSelected(selected => [...selected, invitation])
  }, [setSelected])
  const onInvitationUnselected = useCallback((invitation: InvitationDto) => {
    setSelected(selected => [...selected.filter(item => item !== invitation)])
  }, [setSelected])

  return (
    <div>
      <BatchGeneratorInput onGenerated={onGenerated} />
      <hr />
      <div>
        <span>已选择 {selected.length} 个邀请码</span>
        <input readOnly={true} value={selected.map(invitation => invitation.signature).join(',')} />
      </div>
      <InvitationList invitations={invitations} onSelect={onInvitationSelected} onUnselect={onInvitationUnselected} />
    </div>
  )
}

export default BatchGeneratorPage
