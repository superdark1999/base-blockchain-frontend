import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512.053 512.053" {...props}>
      <path d="m369.575 179.973c-45.57 0-63.56 31.42-73.11 54.18-7.35-14.89-22.69-25.15-40.38-25.15s-33.03 10.26-40.38 25.15c-9.55-22.76-27.53-54.18-73.11-54.18-105.1 0-142.41 212.22-142.41 255.13 0 56.8 31.87 76.95 59.16 76.95 48.01 0 99.64-82.06 124.55-123.05h144.38c24.89 40.96 76.71 123.05 124.55 123.05 27.29 0 59.16-20.15 59.16-76.95 0-18.04-28.12-255.13-142.41-255.13zm-203.49 119.03h-15v15c0 8.28-6.72 15-15 15s-15-6.72-15-15v-15h-15c-8.28 0-15-6.72-15-15s6.72-15 15-15h15v-15c0-8.28 6.72-15 15-15s15 6.72 15 15v15h15c8.28 0 15 6.72 15 15s-6.72 15-15 15zm120 30h-60c-8.28 0-15-6.72-15-15s6.72-15 15-15h60c8.28 0 15 6.72 15 15s-6.72 15-15 15zm90-90c8.28 0 15 6.72 15 15s-6.72 15-15 15-15-6.72-15-15 6.72-15 15-15zm-30 60c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15zm30 30c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15zm30-30c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15z" />
      <path d="m272.305 180.753c-5.25-1.15-10.68-1.75-16.22-1.75-4.75 0-9.41.44-13.94 1.28-1.35-19.28-5.59-39.45-15.9-49.76-26.513-26.514-92.334-7.961-130.49-8.54-64.108-.969-96.53-37.159-95.67-82.897.172-9.157.699-18.697 3.65-28.413 2.39-7.94 10.76-12.42 18.69-10.03 7.91 2.39 12.4 10.72 10.05 18.63-14.259 48.711 17.266 85.209 100.93 69.97 34.597-6.546 88.209-5.781 114.05 20.06 14.6 14.6 22.96 38.64 24.85 71.45z" />
    </Svg>
  )
}

export default Icon
