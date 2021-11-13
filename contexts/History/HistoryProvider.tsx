import React, { useCallback, useEffect, useState } from 'react'
import type { Invitation } from '../../types'

import Context from './context'

const History: React.FC = ({ children }) => {
  const [invitations, setInvitations] = useState(new Array<Invitation>())
  const [selectedInvitations, setSelectedInvitations] = useState(Array<Invitation>())

  const fetchHistory = useCallback(() => {
    fetch('/api/invitations')
    .then(response => response.json())
    .then(response => {
      setInvitations(response.data)
      setSelectedInvitations([])
    })
    .catch(() => alert('获取历史失败'))
  }, [setInvitations])

  const onInvitationSelected = useCallback((invitation: Invitation) => {
    setSelectedInvitations(selected => [...selected, invitation])
  }, [setSelectedInvitations])
  const onInvitationUnselected = useCallback((invitation: Invitation) => {
    setSelectedInvitations(selected => selected.filter(item => item !== invitation))
  }, [setSelectedInvitations])

  useEffect(() => {
    fetchHistory()
  }, [fetchHistory])

  return (
    <Context.Provider value={{
      invitations,
      fetchHistory,
      selectedInvitations,
      onInvitationSelected,
      onInvitationUnselected,
    }}>
      {children}
    </Context.Provider>
  )
}

export default History
