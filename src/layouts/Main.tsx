import Navbar from 'components/navbar'
import Sidebar from 'components/sidebar'
import React from 'react'

interface MainProps {
  children?: React.ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <div>
      <Navbar />
      <Sidebar>{children}</Sidebar>
    </div>
  )
}

export default Main
