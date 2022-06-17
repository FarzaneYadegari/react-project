import React from 'react'
import '../../utils/header.css'
import { BuyButton } from './Table'
function Header() {
  return (
    <header className='relative'>
        <p className='absolute bottom-4 left-4 text-lg font-bold flex flex-col'>
      !اینهمه بسته بی سابقست
      <BuyButton width="w-[120px]" text="!اینجا چه خبره"/>
        </p>
    </header>
  )
}

export default Header