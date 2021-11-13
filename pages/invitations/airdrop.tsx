import type { NextPage } from 'next'
import React from 'react'
import AirDropInput from '../../components/AirDropInput'
import History from '../../components/History'

const AirDropPage: NextPage = () => {
  return (
    <div>
      <AirDropInput />
      <hr />
      <History />
    </div>
  )
}

export default AirDropPage
