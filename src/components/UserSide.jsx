import React from 'react'
import Donut from '../components/ui/Donut.pure'
import { BuyButton } from '../components/ui/Table'
import imageComponent from '.././utils/images/img2.png'
import { MdOutlineMessage, MdWifiProtectedSetup } from 'react-icons/md'
import UserWelcome from '../components/ui/UserWelcome.card'

function UserSide() {
  return (
    <div className=" bg-stone-100 flex flex-col gap-4 h-full pl-4 pt-4 ">
    <UserWelcome />
    <div className="  h-[100vh]  bg-yellow-50 w-full flex flex-col items-center  justify-between">
      <h1 className="text-right p-4 text-lg font-bold">
        شارژ باقی مانده سیمکارت{' '}
      </h1>

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
      <div className="mt-6">
        <BuyButton text="!سیمکارتت رو شارژ کن" width="p-2 font-bold" />
      </div>

      <div className="flex items-center mt-16">
        <div className="flex flex-col gap-2 text-right text-stone-700 font-bold text-xs">
          <p>بسته پیامک هفتگی</p>
          <p>تا تاریخ 31 خرداد 1400</p>
        </div>
        <div className="bg-yellow-100 p-2 rounded-lg m-2">
          <MdOutlineMessage size={24} color="#FDC816" />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col gap-2 text-right text-stone-700 font-bold text-xs">
          <p>بسته اینترنت ماهانه </p>
          <p>تا تاریخ 12 خرداد 1400</p>
        </div>
        <div className="bg-yellow-100 p-2 rounded-lg m-2">
          <MdWifiProtectedSetup size={24} color="#FDC816" />
        </div>
      </div>
   
    <div className="p-8">
      <img src={imageComponent} className="rounded-lg" />
    </div>
    </div>
  </div>  )
}

export default UserSide