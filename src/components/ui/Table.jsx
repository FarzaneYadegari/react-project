import React from 'react'
import "../../utils/table.css"

export  function BuyButton({text,width="w-auto"}){
  return(
<button className={`bg-yellow-400 text-white rounded-md ${width} text-sm`}>{text}</button>
  )
}
function Table() {
  return (
    <div className='flex items-center	justify-center	'>
      <table className='text-sm'>
        <thead>
          <th id="start-cell">تاریخ انقضا بسته</th>
          <th>نام بسته</th>
          <th>تخفیف</th>
          <th>قیمت</th>
          <th id="end-cell">...</th>
        </thead>
        <tbody>
          <tr>
            <td>14 شهریور 1401</td>
            <td>بسته اینترنت سه ماهه</td>
            <td>20%</td>
            <td>130,000</td>
            <td><BuyButton width='w-20' text="خرید"/></td>
          </tr>

          <tr>
            <td>12 خرداد 1401</td> 
            <td>بسته ترکیبی هفته ای</td>
            <td>45%</td>
            <td>45,000</td>
                        <td><BuyButton width='w-20' text="خرید"/></td>

          </tr>

          <tr>
            <td>15 تیر 1401</td> 
            <td>بسته اینترنت یکماهه</td>
            <td>25%</td>
            <td>80,000</td>
                        <td><BuyButton width='w-20' text="خرید"/></td>

          </tr>

          <tr>
            <td>14 11 1401</td> 
            <td>بسته اینترنتی نامحدود شبانه</td>
            <td>30%</td>
            <td>50,000</td>
                        <td><BuyButton width='w-20' text="خرید"/></td>

          </tr>

 
        </tbody>
      </table>
    </div>
  )
}

export default Table
