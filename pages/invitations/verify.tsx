import type { NextPage } from 'next'
import { useCallback, useState } from 'react'

const Verification: NextPage = () => {
  const [input, setInput] = useState('')
  const onChange = useCallback(event => {
    setInput(event.target.value)
  }, [setInput])

  const [available, setAvailable] = useState([])
  const [used, setUsed] = useState([])

  const onCheckClick = useCallback(() => {
    fetch('/api/invitations/validate', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input.split('\n')),
    })
    .then(response => response.json())
    .then(response => {
      setAvailable(response.data.available)
      setUsed(response.data.used)
    })
    .catch(() => alert('调用失败'));
  }, [input, setAvailable, setUsed]);

  return (
    <div>
      <h3>邀请码可用性检查</h3>
      <textarea value={input} onChange={onChange}/>
      <button onClick={onCheckClick}>检查</button>
      <hr />
      <h5>可用</h5>
      <ul>
        {available.map(item => <li>{item}</li>)}
      </ul>
      <h5>已被使用</h5>
      <ul>
        {used.map(item => <li>{item}</li>)}
      </ul>
    </div>
  )
}

export default Verification
