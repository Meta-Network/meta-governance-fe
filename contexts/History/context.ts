import { createContext } from 'react'
import type { Invitation } from '../../types'

export interface HistoryContext {
  invitations: Array<Invitation>
  fetchHistory: () => void

  selectedInvitations: Array<Invitation>
  onInvitationSelected: (invitation: Invitation) => void
  onInvitationUnselected: (invitation: Invitation) => void
}

const context = createContext<HistoryContext>({
  invitations: [],
  fetchHistory: () => {},

  selectedInvitations: [],
  onInvitationSelected: () => {},
  onInvitationUnselected: () => {},
})

export default context
