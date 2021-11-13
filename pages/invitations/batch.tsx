import type { NextPage } from 'next'
import BatchGeneratorInput from '../../components/BatchGeneratorInput'
import History from '../../components/History'

const BatchGeneratorPage: NextPage = () => {
  return (
    <div>
      <BatchGeneratorInput />
      <hr />
      <History />
    </div>
  )
}

export default BatchGeneratorPage
