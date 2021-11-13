import { useContext } from 'react'
import { Context } from '../contexts/History'

export default function useHistory() {
  const context = useContext(Context)

  return { ...context }
}
