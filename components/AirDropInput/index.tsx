import React, { useCallback, useState } from 'react'
import useHistory from '../../hooks/useHistory'

const AirDropInput: React.FC = () => {
  const { fetchHistory } = useHistory()

  const [applicant, setApplicant] = useState('')
  const [count, setCount] = useState(0)
  const [reason, setReason] = useState('')
  const [type, setType] = useState('')
  const [operator, setOperator] = useState('eq')
  const [amount, setAmount] = useState(1)

  const onApplicantChange = useCallback(event => {
    setApplicant(event.target.value)
  }, [setApplicant])
  const onCountChange = useCallback(event => {
    setCount(event.target.value)
  }, [setCount])
  const onReasonChange = useCallback(event => {
    setReason(event.target.value)
  }, [setReason])
  const onTypeChange = useCallback(event => {
    setType(event.target.value)
  }, [setType])
  const onOperatorChange = useCallback(event => {
    setOperator(event.target.value)
  }, [setOperator])
  const onAmountChange = useCallback(event => {
    setAmount(event.target.value)
  }, [setAmount])

  const onGenerateClick = useCallback(() => {
    fetch('/api/invitations/airdrop/matataki', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ count, applicant, reason, type, operator, amount }),
      credentials: 'include',
    })
    .then(response => response.json())
    .then(() => fetchHistory())
    .catch(() => alert('空投失败'))
  }, [applicant, count, reason, type, operator, amount, fetchHistory])

  const displayCondition = !['fanticket', 'DEVELOPER'].includes(type)

  return (
    <div>
      <div>
        <h3>生成器</h3>
        <span>申请人</span>
        <input onChange={onApplicantChange} value={applicant} />
        <span>数量</span>
        <input onChange={onCountChange} value={count} type="number" />
        <span>原因用途</span>
        <input onChange={onReasonChange} value={reason} />
      </div>
      <div>
        <span>标签</span>
        <select value={type} onChange={onTypeChange}>
          <option value="fanticket">已发行 Fan 票</option>
          <option value="post">发文数</option>
          <option value="metacc">持有 METACC</option>
          <option value="follower">粉丝</option>
          <option value="DEVELOPER">指定用户</option>
        </select>
        {displayCondition && (
          <>
            <span>运算符</span>
            <select value={operator} onChange={onOperatorChange}>
              <option value="eq">等于</option>
              <option value="gt">大于</option>
              <option value="gte">大于等于</option>
              <option value="lt">小于</option>
              <option value="lte">小于等于</option>
            </select>
          </>)}
        <span>{type !== 'DEVELOPER' ? '数量' : '用户 ID'}</span>
        <input type="number" value={amount} onChange={onAmountChange} />
      </div>

      <button onClick={onGenerateClick}>生成</button>
    </div>
  )
}

export default AirDropInput
