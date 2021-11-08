import React, { useCallback, useState } from 'react'
import type { InvitationDto } from '../../types'

interface Props {
  onGenerated: (invitations: Array<InvitationDto>) => void
}

const BatchGeneratorInput: React.FC<Props> = ({ onGenerated }: Props) => {
  const [applicant, setApplicant] = useState('')
  const [count, setCount] = useState(0)
  const [reason, setReason] = useState('')

  const onApplicantChange = useCallback(event => {
    setApplicant(event.target.value)
  }, [setApplicant])
  const onCountChange = useCallback(event => {
    setCount(event.target.value)
  }, [setCount])
  const onReasonChange = useCallback(event => {
    setReason(event.target.value)
  }, [setReason])

  const onGenerateClick = useCallback(() => {
    fetch('/api/invitations/batch-generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count, applicant, reason }),
    })
    .then(response => response.json())
    .then(response => onGenerated(response))
  }, [applicant, count, reason])

  return (
    <div>
      <h3>生成器</h3>
      <span>申请人</span>
      <input onChange={onApplicantChange} value={applicant} />
      <span>数量</span>
      <input onChange={onCountChange} value={count} type="number" />
      <span>原因用途</span>
      <input onChange={onReasonChange} value={reason} />

      <button onClick={onGenerateClick}>生成</button>
    </div>
  )
}

export default BatchGeneratorInput
