import React from 'react'
import logoComponent from '.././utils/images/logo.png'
import searchIconComponent from '.././utils/images/Search.png'
import {
  TbSmartHome,
  TbBrandGoogleAnalytics,
  TbWifi,
  TbLego,
  TbZoomCheck,
  TbBorderRadius,
  TbCircles,
  TbReportMoney,
  TbDeviceComputerCamera,
} from 'react-icons/tb'
function SideNavigateMenu() {
  return (
    <div className="bg-white ">

    <div className='flex flex-col items-center gap-8 my-8'>
    <img src={logoComponent} alt="" width={152} />
    <div className="flex items-center border w-3/4 rounded-lg px-4 py-2">
      <input type="image" src={searchIconComponent} />
      <input
        type="text"
        placeholder="جستجو"
        className="px-4 text-right w-3/4"
      />
    </div>
  </div>

  <div className='flex flex-col items-end px-8 gap-4 text-sm'>
    <div className="flex items-center ">
      <strong className="text-stone-700 pr-2 font-bold hover:text-yellow ">
        صفحه اصلی
      </strong>
      <TbSmartHome color="#FDC816" size={24} />
    </div>

<div className='text-stone-200'>سرویس ها</div>
    <div className="flex items-center">
      <strong className="text-stone-400 pr-2">شارژ و سیمکارت</strong>
      <TbBrandGoogleAnalytics size={24} color="#818181" />
    </div>

    <div className="flex items-center">
      <strong className="text-stone-400 pr-2">اینترنت</strong>
      <TbWifi size={24} color="#818181" />
    </div>

    <div className="flex items-center">
      <strong className="text-stone-400 pr-2">کارکرد و فروش</strong>
      <TbReportMoney size={24} color="#818181" />
    </div>

    <div className="flex items-center">
      <strong className="text-stone-400 pr-2">خدمات</strong>
      <TbDeviceComputerCamera size={24} color="#818181" />
    </div>

    <div className='text-stone-200'>مدیریت  </div>


    <div className="flex items-center">
      <strong className="text-stone-400 pr-2">مدیریت خدمات</strong>
      <TbCircles size={24} color="#818181" />
    </div>

    <div className="flex items-center">
      <strong className="text-stone-400 pr-2">مدیریت سیمکارت</strong>
      <TbBorderRadius size={24} color="#818181" />
    </div>

    <div className='text-stone-200'>...  </div>

    <div className="flex items-center">
      <strong className="text-stone-400">سوالات مرتبط</strong>
      <TbZoomCheck size={24} color="#818181" />
    </div>

    <div className="flex items-center">
      <strong className="text-stone-400 pr-2">ارتباط با ما</strong>
      <TbLego size={24} color="#818181" />
    </div>
  </div> 
  </div> )
}

export default SideNavigateMenu