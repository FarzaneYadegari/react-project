import React from 'react'
import Donut from '../components/ui/Donut.pure'
import UsageDiagram from "../components/ui/usageDiagram"
import Table from '../components/ui/Table'
function Home() {
  return (
    <div className='h-[100vh] grid  grid-cols-4 bg-red-100 '>
    <div className="bg-slate-500">
<Table/>
    </div>
    <div className=" col-span-2 bg-blue-800">
    </div>
    <div className=" bg-slate-500">n</div>
    </div>
  )
}

export default Home