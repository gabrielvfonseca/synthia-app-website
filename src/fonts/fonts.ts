// eslint-disable-next-line camelcase

import localFont from 'next/font/local';

export const GTWalsheimPro = localFont({
  variable: '--font-sans',
  src: [
    {
      path: './var/GTWalsheimPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './var/GTWalsheimPro-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './var/GTWalsheimPro-BlackOblique.ttf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './var/GTWalsheimPro-Bold.ttf',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './var/GTWalsheimPro-BoldOblique.ttf',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: './var/GTWalsheimPro-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './var/GTWalsheimPro-LightOblique.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './var/GTWalsheimPro-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './var/GTWalsheimPro-MediumOblique.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './var/GTWalsheimPro-RegularOblique.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './var/GTWalsheimPro-UltraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './var/GTWalsheimPro-UltraBoldOblique.ttf',
      weight: '800',
      style: 'italic',
    }
  ],
});
