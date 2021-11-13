import React, { useCallback } from "react"
import useHistory from "../../hooks/useHistory"
import InvitationRow from "../InvitationRow"

const History: React.FC = () => {
  const { invitations, fetchHistory, selectedInvitations, onInvitationSelected, onInvitationUnselected } = useHistory()

  const onUpdateMessageClicked = useCallback(() => {
    const message = prompt('请输入要设置的邀请信息（空为取消）')
    if (!message) {
      return
    }

    fetch('/api/invitations/message', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        signatures: selectedInvitations.map(invitation => invitation.signature),
        message,
      }),
      credentials: 'include',
    }).then(() => fetchHistory())
    .catch(() => alert('更新失败'))
  }, [fetchHistory, selectedInvitations])

  const rows = invitations.map((item, index) => (
    <InvitationRow key={index} invitation={item} onSelect={onInvitationSelected} onUnselect={onInvitationUnselected} />)
  )

  return (
    <div>
      <h3>历史记录</h3>
      <div>
        <span>已选择 {selectedInvitations.length} 个邀请码</span>
        <input readOnly={true} value={selectedInvitations.map(invitation => invitation.signature).join(',')} />
        {selectedInvitations.length > 0 && (
          <button onClick={onUpdateMessageClicked}>更新邀请信息</button>
        )}
      </div>
      {rows}
    </div>
  )
}

export default History
