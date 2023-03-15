// eslint-disable-next-line camelcase

import localFont from 'next/font/local';

export const AllienceFont = localFont({
  variable: '--font-sans',
  src: [
    {
      path: './AllianceBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './AllianceMedium.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './AllianceRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './AllianceSemiBold.otf',
      weight: '700',
      style: 'italic',
    },
  ],
});
