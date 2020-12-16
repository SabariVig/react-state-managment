import React from 'react'
import Input from '../lib/Components/Input'
import Pending from '../lib/Components/Pending'
import Tasks from '../lib/Components/Tasks'

const Index = () => {
  return (
    <div>
      <Pending />
      <Tasks />
      <Input />
    </div>
  )
}

export default Index
