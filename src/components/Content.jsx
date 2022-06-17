import React from 'react'
import UsageDiagram from "../components/ui/usageDiagram"
import Table from '../components/ui/Table'
import Header from '../components/ui/Header'

function Content() {
  return (
    <div className="bg-stone-100 col-span-2 0 flex flex-col gap-8 px-8">
    <h1 className='text-right p-4 text-lg font-bold' >صفحه اصلی</h1>

    <Header/>
      <div className=' bg-white  p-8 rounded-lg'>
      <h1 className='text-right text-lg font-bold'>نمودار میزان مصرف کل</h1>
      <div className='h-60'>

             <UsageDiagram />
</div>
      </div>
   

     <div className='bg-white rounded-lg'>
      <h1 className='text-right p-4 text-lg font-bold'>!بسته های پیشنهادی خود شما</h1>
    <Table/>
      </div>
    </div>
  )
}

export default Content