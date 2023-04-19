// eslint-disable-next-line camelcase

import localFont from 'next/font/local';

export const GTWalsheimPro = localFont({
  variable: '--font-sans',
  src: [
    {
      path: './GTWalsheimPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './GTWalsheimPro-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './GTWalsheimPro-BlackOblique.ttf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './GTWalsheimPro-Bold.ttf',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './GTWalsheimPro-BoldOblique.ttf',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: './GTWalsheimPro-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './GTWalsheimPro-LightOblique.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './GTWalsheimPro-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './GTWalsheimPro-MediumOblique.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './GTWalsheimPro-RegularOblique.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './GTWalsheimPro-UltraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './GTWalsheimPro-UltraBoldOblique.ttf',
      weight: '800',
      style: 'italic',
    }
  ],
});
