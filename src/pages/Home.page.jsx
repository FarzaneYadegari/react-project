import React from 'react'

import Content from '../components/Content'

import SideNavigateMenu from '../components/SideNavigateMenu'
import UserSide from '../components/UserSide'

function Home() {
  return (
    <div
      className="h-min-[100vh] grid  grid-cols-4"
      style={{ fontFamily: 'Nahid-FD-WOL' }}
    >
    <UserSide/>
      <Content />
     <SideNavigateMenu/>
    </div>
  )
}

export default Home
