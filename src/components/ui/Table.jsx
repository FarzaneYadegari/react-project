import React from 'react'
import "../../utils/table.css"
function Table() {
  return (
    <div>
      <table>
        <thead>
          <th>تاریخ انقضا بسته</th>
          <th>نام بسته</th>
          <th>تخفیف</th>
          <th>قیمت</th>
          <th>...</th>
        </thead>
        <tbody>
          <tr>
            <td>1/4  /1401</td>
            <td></td>
            <td></td>
            <td></td>
            <td>m</td>

          </tr>

          <tr>
            <td>4/5/1401</td> <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>8/6/1401</td> <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>14/11/1401</td> <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
