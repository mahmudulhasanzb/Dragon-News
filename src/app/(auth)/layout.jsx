import Navbar from '@/components/shared/Navbar'
import React from 'react'
import { monserat } from '../layout'

const AuthLayout = ({children}) => {
  return (
    <div className={`${monserat}`}>
      <Navbar />
      {children}
    </div>
  )
}

export default AuthLayout