import localFont from 'next/font/local'

const TTHoves = localFont({
  src: [
    
    {
      path: '../fonts/TTHoves-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../fonts/TTHoves-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../fonts/TTHoves-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/TTHoves-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/TTHoves-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/TTHoves-MediumItalic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../fonts/TTHoves-DemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/TTHoves-DemiBoldItalic.woff2',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../fonts/TTHoves-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/TTHoves-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    }
  ]
})

export default TTHoves