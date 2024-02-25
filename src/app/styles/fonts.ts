import localFont from 'next/font/local'

const TTHoves = localFont({
  src: [
    
    {
      path: '../fonts/TTHoves-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../fonts/TTHoves-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/TTHoves-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/TTHoves-DemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/TTHoves-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
  ]
})

export default TTHoves