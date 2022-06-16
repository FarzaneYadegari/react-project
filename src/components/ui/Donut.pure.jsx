import React from 'react'
import DonutChart from 'react-donut-chart'

function Donut({width=200,height=200}) {
  return (
    <DonutChart
      legend={false}
      width={width}
      height={height}
      colors={['#E4EBEC', '#FDC816']}
      data={[
        {
          value: 25,
        },
        {
          value: 75,
        },
      ]}
    />
  )
}

export default Donut
