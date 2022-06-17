import React from 'react'
import Donut from '../components/ui/Donut.pure'

import Content from '../components/Content'
import { BuyButton } from '../components/ui/Table'
function Home() {
  return (
    <div
      className="bg-stone-100  h-min-[100vh] grid  grid-cols-4"
      style={{ fontFamily: 'Nahid-FD-WOL' }}
    >
      <div className="bg-yellow-50">
        <div className=" w-full flex flex-col items-center justify-center">
          <h1 className="text-right p-4 text-lg font-bold">شارژ باقی مانده سیمکارت </h1>

          <div className="relative">
            <div
              className="flex text-blue-500"
              style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <p>تومان</p>
              <p>6000</p>
            </div>

            <Donut />
          </div>
          <BuyButton text="!سیمکارتت رو شارژ کن" width='p-2 font-bold'/>
        </div>
      </div>
      <Content />
      <div className="bg-white ">n</div>
    </div>
  )
}

export default Home
