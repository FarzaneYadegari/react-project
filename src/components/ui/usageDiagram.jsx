import { Chart } from 'react-charts'
import React from 'react'

export default function MyChart() {
  const data = [
    {
      label: 'React Charts',
      data: [
        {
          date: '2/9/1400',
          stars: 3,
        },
        {
          date: '3/11/1401',
          stars: 2,
        },
        {
          date: '5/8/1401',
          stars: 5,
        },
        {
          date: '3/11/1402',
          stars: 1,
        },
      ],
    },
  ]

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.date,
      elementType: 'line',
    }),
    [],
  )

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.stars,
        elementType: 'line',
      },
    ],
    [],
  )

  return (
    <Chart
    style={{fill:"red"}}
      initialWidth={250}
      initialHeight={250}
      options={{
        data,
        primaryAxis,
        secondaryAxes,
      }}
    />
  )
}
