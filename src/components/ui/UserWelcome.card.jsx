import React from 'react'
import imgComponent from '../../utils/images/react.png'

function UserWelcome() {
  return (
    <div className="flex items-center justify-end w-full bg-white rounded-md pr-8">
      <div className="flex flex-col gap-2 text-right text-stone-700 font-bold text-xs">
        <p> فرزانه یادگاری </p>
        <p>درس چند رسانه ای </p>
        <p> استاد ناظر: آقای احمد پناه </p>
      </div>
      <div className="bg-yellow-300 p-2 rounded-lg m-2">
        <img src={imgComponent} alt="" width={62} className=" rounded-lg" />
      </div>
    </div>
  )
}

export default UserWelcome
